const http = require('http');

function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, data }));
        }).on('error', reject);
    });
}

async function verify() {
    console.log('--- Verifying Logout Confirmation Screen & Navigation ---');
    
    // 1. Verify /admin/more contains link to /admin/logout-confirmation
    const moreRes = await fetch('http://localhost:3000/admin/more');
    console.log('/admin/more Status:', moreRes.status);
    const hasLogoutLink = moreRes.data.includes('href="/admin/logout-confirmation"');
    console.log('Includes href="/admin/logout-confirmation":', hasLogoutLink);
    if (!hasLogoutLink) throw new Error('Missing logout-confirmation link in more.html');

    // 2. Verify /admin/logout-confirmation
    const logoutRes = await fetch('http://localhost:3000/admin/logout-confirmation');
    console.log('/admin/logout-confirmation Status:', logoutRes.status);
    if (logoutRes.status !== 200) throw new Error('Failed to load /admin/logout-confirmation');

    // 3. Verify /admin/logout alias
    const aliasRes = await fetch('http://localhost:3000/admin/logout');
    console.log('/admin/logout Status:', aliasRes.status);
    if (aliasRes.status !== 200) throw new Error('Failed to load /admin/logout');

    // 4. Assert key UI elements from mockup and modified details
    const requiredStrings = [
        'Logout Confirmation',
        'Log Out of HavenHostel?',
        'Alex Morgan',
        'Super Admin',
        'alex.morgan@havenhostel.com',
        'ACTIVE SHIFT SUMMARY',
        'Action Required',
        'Active Cash Drawer',
        '₹4,500.00',
        'Drawer #01 unbanked. Shift handoff recommended before leaving.',
        'Open Work Orders',
        '2 Pending',
        'Room 204 AC leak & Pod B-12 digital keycard failure.',
        'Hand over shift to Warden Dave Miller',
        'Transfers cash register custody and auto-forwards pending floor tickets.',
        'Confirm & Log Out',
        'Cancel & Stay Signed In',
        'You can securely log back in using Face ID or PIN anytime.'
    ];

    for (const str of requiredStrings) {
        if (!logoutRes.data.includes(str)) {
            throw new Error(`Missing expected element in logout screen: "${str}"`);
        }
    }
    console.log('All required UI strings from mockup and app modifications verified successfully!');
    console.log('--- ALL CHECKS PASSED ---');
}

verify().catch(err => {
    console.error('VERIFICATION ERROR:', err);
    process.exit(1);
});
