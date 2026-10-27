const http = require('http');

function testUrl(urlPath, searchStrings) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${urlPath}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`Testing ${urlPath}: Status ${res.statusCode}`);
                if (res.statusCode !== 200) {
                    reject(new Error(`Failed with status ${res.statusCode}`));
                    return;
                }
                const missing = searchStrings.filter(s => !data.includes(s));
                if (missing.length > 0) {
                    reject(new Error(`Missing strings in ${urlPath}: ${JSON.stringify(missing)}`));
                    return;
                }
                console.log(`  ✓ All ${searchStrings.length} checks passed for ${urlPath}`);
                resolve(true);
            });
        }).on('error', reject);
    });
}

async function run() {
    try {
        await testUrl('/admin/maintenance', [
            'Hostel Maintenance & Work Orders',
            '5 Active • 2 Urgent Requires Action',
            'Room 102',
            'AC Leaking Water Continuously',
            'Elena Rostova',
            'Room 104',
            'Flush Valve Leak & Low Pressure',
            'John Doe (Lead Plumber)',
            'Floor 2 Corridors',
            'Mesh Access Point #2B disconnected',
            'Room 301',
            'Mechanical deadbolt OK, smart latch offline',
            'Log New Maintenance Issue',
            'Maintenance Requests'
        ]);

        await testUrl('/admin/maintenance-requests', [
            'Hostel Maintenance & Work Orders',
            'Room 102'
        ]);

        // Verify another page has Maintenance Requests in its sidebar
        await testUrl('/admin/dashboard', [
            '/admin/maintenance',
            'Maintenance Requests'
        ]);

        console.log('\n=== ALL MAINTENANCE REQUESTS CHECKS VERIFIED SUCCESSFULLY ===');
    } catch (err) {
        console.error('Verification failed:', err.message);
        process.exit(1);
    }
}

run();
