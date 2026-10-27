const http = require('http');

async function testEndpoint(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, data }));
        }).on('error', reject);
    });
}

async function run() {
    console.log('Testing /admin/notifications...');
    const notifs = await testEndpoint('http://localhost:3000/admin/notifications');
    console.log('Notifications status:', notifs.status);
    console.log('Notifications has transitionToUnread:', notifs.data.includes('transitionToUnread'));
    console.log('Notifications links to unread-notifications:', notifs.data.includes('/admin/unread-notifications'));
    console.log('Notifications has Cormorant Garamond:', notifs.data.includes('Cormorant+Garamond'));

    console.log('\nTesting /admin/unread-notifications...');
    const unread = await testEndpoint('http://localhost:3000/admin/unread-notifications');
    console.log('Unread status:', unread.status);
    console.log('Unread has slide-in-right:', unread.data.includes('slide-in-right'));
    console.log('Unread has Marcus Vance:', unread.data.includes('Marcus Vance'));
    console.log('Unread has AC Leak:', unread.data.includes('AC Leak'));
    console.log('Unread has Liam O\'Connor:', unread.data.includes("Liam O'Connor"));
    console.log('Unread has Fire Exit Sensor:', unread.data.includes('Fire Exit Sensor Triggered'));
    console.log('Unread has Assign Duty Technician:', unread.data.includes('Assign Duty Technician'));
    console.log('Unread has View Camera Feed:', unread.data.includes('View Camera Feed'));
    console.log('Unread has Mark All Unread as Read:', unread.data.includes('Mark All Unread as Read'));
    console.log('Unread has CCTV modal:', unread.data.includes('cameraModal'));
    console.log('Unread has Tech modal:', unread.data.includes('techModal'));
    console.log('Unread has mobile bottom nav:', unread.data.includes('/admin/dashboard') && unread.data.includes('/admin/finance'));
    console.log('Unread has HavenHostel:', unread.data.includes('HavenHostel'));
    console.log('Unread has Cormorant Garamond:', unread.data.includes('Cormorant+Garamond'));
}

run().catch(console.error);
