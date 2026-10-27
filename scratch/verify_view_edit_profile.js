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
    console.log('--- Verifying View & Edit Profile Routes ---');
    
    // 1. Check /admin/more contains link to /admin/view-edit-profile
    const moreRes = await fetch('http://localhost:3000/admin/more');
    console.log('/admin/more Status:', moreRes.status);
    const hasProfileLink = moreRes.data.includes('href="/admin/view-edit-profile"');
    console.log('Includes href="/admin/view-edit-profile":', hasProfileLink);
    if (!hasProfileLink) throw new Error('Missing link in more.html');

    // 2. Check /admin/view-edit-profile
    const profileRes = await fetch('http://localhost:3000/admin/view-edit-profile');
    console.log('/admin/view-edit-profile Status:', profileRes.status);
    if (profileRes.status !== 200) throw new Error('Failed to load /admin/view-edit-profile');
    
    const requiredStrings = [
        'Alex Morgan',
        'Personal Information',
        'Security & Access',
        'Active Sessions',
        'Save Profile Changes',
        '#ADM-8802',
        'Sunrise Branch'
    ];
    for (const str of requiredStrings) {
        if (!profileRes.data.includes(str)) {
            throw new Error(`Missing expected string: ${str}`);
        }
    }
    console.log('All required UI strings present in view-edit-profile.html!');

    // 3. Check aliases
    const alias1 = await fetch('http://localhost:3000/admin/profile/edit');
    const alias2 = await fetch('http://localhost:3000/admin/edit-profile');
    console.log('/admin/profile/edit Status:', alias1.status);
    console.log('/admin/edit-profile Status:', alias2.status);

    console.log('--- VERIFICATION SUCCESSFUL ---');
}

verify().catch(err => {
    console.error('VERIFICATION ERROR:', err);
    process.exit(1);
});
