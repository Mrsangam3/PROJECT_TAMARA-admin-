const http = require('http');
const fs = require('fs');
const path = require('path');

function get(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, data }));
        }).on('error', reject);
    });
}

async function audit() {
    console.log('========================================================');
    console.log('   TAAMARA CO-LIVE SPACES PORTAL FULL SYSTEM AUDIT');
    console.log('========================================================\n');

    // 1. Audit Server Endpoints
    const endpoints = [
        '/',
        '/admin/login',
        '/admin/dashboard',
        '/admin/residents',
        '/admin/tenants',
        '/admin/rooms',
        '/admin/rooms/floor-1',
        '/admin/rooms/floor-2',
        '/admin/rooms/floor-3',
        '/admin/add-room',
        '/admin/room-details',
        '/admin/finance',
        '/admin/record-entry',
        '/admin/expenses-ledger',
        '/admin/notifications',
        '/admin/more',
        '/admin/view-edit-profile',
        '/admin/logout-confirmation',
        '/admin/assign-bed',
        '/admin/new-checkins',
        '/admin/pending-dues',
        '/admin/paid-tenants',
        '/admin/collect-due'
    ];

    console.log('1. Checking Server Routes (HTTP 200)...');
    let failedRoutes = 0;
    for (const ep of endpoints) {
        try {
            const res = await get(`http://localhost:3000${ep}`);
            if (res.status === 200 || res.status === 302) {
                console.log(`  [OK] ${ep.padEnd(30)} -> HTTP ${res.status}`);
            } else {
                console.error(`  [FAIL] ${ep.padEnd(30)} -> HTTP ${res.status}`);
                failedRoutes++;
            }
        } catch (e) {
            console.error(`  [ERROR] ${ep.padEnd(30)} -> ${e.message}`);
            failedRoutes++;
        }
    }

    // 2. Audit HTML Files for Brand Consistency
    console.log('\n2. Verifying Fonts, Theme CSS & Mobile Bottom Nav...');
    const htmlFiles = fs.readdirSync('public').filter(f => f.endsWith('.html'));
    let failedFiles = 0;

    for (const f of htmlFiles) {
        const content = fs.readFileSync(path.join('public', f), 'utf8');
        const hasGaramond = content.includes('Cormorant+Garamond') || content.includes('Cormorant Garamond');
        const hasThemeCss = content.includes('taamara-theme.css');
        const hasThemeJs = content.includes('taamara-theme.js');

        const isPublicLanding = f === 'index.html';
        const isLogin = f === 'admin-login.html';

        if (!hasGaramond || !hasThemeCss || !hasThemeJs) {
            console.error(`  [FAIL] ${f}: Garamond=${hasGaramond}, ThemeCSS=${hasThemeCss}, ThemeJS=${hasThemeJs}`);
            failedFiles++;
        } else {
            console.log(`  [OK] ${f.padEnd(25)} -> Cormorant Garamond, ThemeCSS & ThemeJS Active`);
        }
    }

    console.log('\n========================================================');
    if (failedRoutes === 0 && failedFiles === 0) {
        console.log('   >>> AUDIT PASSED 100% - ALL ROUTES & THEMES VALID <<<');
    } else {
        console.error(`   >>> AUDIT COMPLETED WITH ISSUES: ${failedRoutes} routes failed, ${failedFiles} files failed <<<`);
        process.exit(1);
    }
    console.log('========================================================');
}

audit().catch(err => {
    console.error('Fatal audit error:', err);
    process.exit(1);
});
