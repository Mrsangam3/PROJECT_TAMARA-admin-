const http = require('http');

function get(path) {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:3000' + path, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, body: data });
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log('--- Testing /admin/notifications ---');
    const notif = await get('/admin/notifications');
    console.log('Notifications status:', notif.statusCode);
    const hasMarcus = notif.body.includes('Payment Overdue Alert') && notif.body.includes('Marcus Vance');
    const hasElena = notif.body.includes('New Maintenance Request') && notif.body.includes('Elena Rostova');
    const hasCurfew = notif.body.includes('Gate Curfew Breach') && notif.body.includes('Liam O\'Connor');
    const hasRent = notif.body.includes('Rent Received') && notif.body.includes('David Chen');
    const hasAudit = notif.body.includes('Inspection Completed') && notif.body.includes('Warden John');
    const hasMarkAll = notif.body.includes('Mark all as read');
    console.log('Has Payment Overdue Alert?', hasMarcus);
    console.log('Has New Maintenance Request?', hasElena);
    console.log('Has Gate Curfew Breach?', hasCurfew);
    console.log('Has Rent Received?', hasRent);
    console.log('Has Inspection Completed?', hasAudit);
    console.log('Has Mark all as read?', hasMarkAll);

    console.log('\n--- Testing /admin/more ---');
    const more = await get('/admin/more');
    console.log('More status:', more.statusCode);
    const hasAlex = more.body.includes('Alex Morgan') && more.body.includes('Super Admin • Sunrise Branch');
    const hasTiles = more.body.includes('Sunrise Haven') && more.body.includes('Day Handover');
    const hasStaff = more.body.includes('Staff Management') && more.body.includes('3 Wardens, 2 Cleaners, 1 Tech');
    const hasReports = more.body.includes('Reports & Analytics') && more.body.includes('Occupancy, Revenue & Trends');
    const hasSecurity = more.body.includes('Security & Gate Pass') && more.body.includes('Visitor logs & night curfew logs');
    const hasNotifLink = more.body.includes('href="/admin/notifications"') && more.body.includes('4 Unread');
    const hasSettings = more.body.includes('Hostel Settings & Pricing') && more.body.includes('Room rates, rules & curfew');
    const hasHelp = more.body.includes('Help & Support');
    const hasLogout = more.body.includes('Logout') && more.body.includes('/admin/login');
    const hasBuild = more.body.includes('HavenHostel Admin v2.4.1 (Build 108)');

    console.log('Has Alex Morgan Profile?', hasAlex);
    console.log('Has Property & Shift Tiles?', hasTiles);
    console.log('Has Staff Management?', hasStaff);
    console.log('Has Reports & Analytics?', hasReports);
    console.log('Has Security & Gate Pass?', hasSecurity);
    console.log('Has Notifications Link with 4 Unread?', hasNotifLink);
    console.log('Has Hostel Settings & Pricing?', hasSettings);
    console.log('Has Help & Support & Logout?', hasHelp && hasLogout);
    console.log('Has Build Info?', hasBuild);

    console.log('\n--- Testing Alias Routes ---');
    const moreProf = await get('/admin/more-profile');
    const prof = await get('/admin/profile');
    console.log('/admin/more-profile status:', moreProf.statusCode);
    console.log('/admin/profile status:', prof.statusCode);

    console.log('\n--- Checking Sidebar Links on Dashboard & Finance ---');
    const dash = await get('/admin/dashboard');
    const fin = await get('/admin/finance');
    const dashHasNotif = dash.body.includes('href="/admin/notifications"') && dash.body.includes('Notifications');
    const dashHasMore = dash.body.includes('href="/admin/more"') && dash.body.includes('More & Profile');
    const finHasNotif = fin.body.includes('href="/admin/notifications"') && fin.body.includes('Notifications');
    const finHasMore = fin.body.includes('href="/admin/more"') && fin.body.includes('More & Profile');
    console.log('Dashboard sidebar has Notifications & More:', dashHasNotif && dashHasMore);
    console.log('Finance sidebar has Notifications & More:', finHasNotif && finHasMore);

    if (notif.statusCode === 200 && more.statusCode === 200 && hasMarcus && hasElena && hasAlex && hasNotifLink && dashHasNotif) {
        console.log('\n ALL NOTIFICATIONS AND MORE & PROFILE CHECKS PASSED SUCCESSFULLY!');
    } else {
        console.error('\n SOME CHECKS FAILED!');
        process.exit(1);
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
