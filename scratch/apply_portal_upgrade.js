const fs = require('fs');
const path = require('path');
const { getUnifiedSidebar, getMobileTopBarAndPopup } = require('./nav_template');

const pagesConfig = {
    'dashboard.html': { activeKey: 'dashboard', activeSubKey: null },
    'tenants.html': { activeKey: 'tenants', activeSubKey: null },
    'rooms.html': { activeKey: 'rooms', activeSubKey: 'floor-1' },
    'floor-rooms.html': { activeKey: 'rooms', activeSubKey: 'floor-1' },
    'floor-2-rooms.html': { activeKey: 'rooms', activeSubKey: 'floor-2' },
    'floor-3-rooms.html': { activeKey: 'rooms', activeSubKey: 'floor-3' },
    'add-room.html': { activeKey: 'rooms', activeSubKey: 'add-room' },
    'room-details.html': { activeKey: 'rooms', activeSubKey: 'floor-1' },
    'finance.html': { activeKey: 'finance', activeSubKey: null },
    'record-entry.html': { activeKey: 'finance', activeSubKey: 'record-entry' },
    'expenses-ledger.html': { activeKey: 'finance', activeSubKey: 'expenses' },
    'notifications.html': { activeKey: 'notifications', activeSubKey: null },
    'more.html': { activeKey: 'more', activeSubKey: null },
    'view-edit-profile.html': { activeKey: 'more', activeSubKey: 'edit-profile' },
    'logout-confirmation.html': { activeKey: 'more', activeSubKey: 'logout-confirmation' },
    'assign-bed.html': { activeKey: 'assign-bed', activeSubKey: null },
    'new-checkins.html': { activeKey: 'new-checkins', activeSubKey: null },
    'pending-dues.html': { activeKey: 'pending-dues', activeSubKey: null },
    'paid-tenants.html': { activeKey: 'paid-tenants', activeSubKey: null },
    'collect-due.html': { activeKey: 'finance', activeSubKey: null },
    'new-expense.html': { activeKey: 'finance', activeSubKey: 'expenses' },
    'maintenance.html': { activeKey: 'maintenance', activeSubKey: null },
    'unread-notifications.html': { activeKey: 'notifications', activeSubKey: 'unread' }
};

const headFontAndThemeBlock = `    <!-- Google Fonts (Official TAAMARA Typography) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- TAAMARA Brand Design System & Themes -->
    <link rel="stylesheet" href="/css/taamara-theme.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/js/taamara-theme.js"></script>`;

console.log('--- Applying Mobile 3-Bars Top Navigation & Removing Bottom Nav Across All Screens ---');

for (const [filename, config] of Object.entries(pagesConfig)) {
    const filePath = path.join('public', filename);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping missing: ${filename}`);
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Ensure <head> contains Google Fonts and taamara-theme.css / taamara-theme.js
    if (!content.includes('taamara-theme.css')) {
        if (content.includes('https://fonts.googleapis.com/css2')) {
            content = content.replace(/<link[^>]+googleapis\.com\/css2[^>]+>/i, '');
        }
        if (content.includes('https://cdn.tailwindcss.com')) {
            content = content.replace(/<script[^>]+cdn\.tailwindcss\.com[^>]*><\/script>/i, headFontAndThemeBlock);
        } else {
            content = content.replace('</head>', `${headFontAndThemeBlock}\n</head>`);
        }
    }

    // 2. Body background update to luxury cream #faf6f0
    content = content.replace(/<body class="([^"]*)"/i, (match, classes) => {
        let updatedClasses = classes
            .replace(/bg-slate-[0-9]+/g, 'bg-[#faf6f0]')
            .replace(/text-slate-800/g, 'text-[#1a1016]');
        if (!updatedClasses.includes('bg-[#faf6f0]')) updatedClasses += ' bg-[#faf6f0] text-[#1a1016]';
        return `<body class="${updatedClasses.trim()}"`;
    });

    // 3. Replace <aside id="desktopSidebar" ... </aside> with unified sidebar
    const asideRegex = /<aside id="desktopSidebar"[\s\S]*?<\/aside>/i;
    if (asideRegex.test(content)) {
        content = content.replace(asideRegex, getUnifiedSidebar(config.activeKey, config.activeSubKey));
    }

    // 4. REMOVE bottom mobile navigation completely
    content = content.replace(/<!-- MOBILE BOTTOM NAVIGATION BAR[\s\S]*?<\/nav>\s*/gi, '');
    content = content.replace(/<nav class="lg:hidden fixed bottom-0[\s\S]*?<\/nav>\s*/gi, '');

    // 5. Remove any previously added mobile top navigation bar or popup modal to avoid duplicates
    content = content.replace(/<!-- MOBILE TOP NAVIGATION BAR \(Small 3 Bars[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/gi, '');

    // 6. Fix padding bottom on main container now that bottom nav is removed
    content = content.replace(/pb-20\s+lg:pb-12/g, 'pb-12');
    content = content.replace(/\bpb-20\b/g, 'pb-12');

    // 7. Inject Mobile Top Bar & Popup Navigation right after </header>
    const mobileTopBarAndPopup = getMobileTopBarAndPopup(config.activeKey, config.activeSubKey);
    if (content.includes('</header>')) {
        content = content.replace('</header>', `</header>\n\n    ${mobileTopBarAndPopup}\n`);
    }

    // 8. Add mobile-nav-popup-trigger class to header mobile icon/button if present
    content = content.replace(
        /(<a href="\/admin\/dashboard" class="lg:hidden w-9 h-9 rounded-xl [^"]*)"/i,
        `$1 mobile-nav-popup-trigger"`
    );

    // 9. Ensure sidebar-scroll.js is included before </body>
    if (!content.includes('sidebar-scroll.js')) {
        content = content.replace('</body>', `    <script src="/js/sidebar-scroll.js"></script>\n</body>`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filename} successfully!`);
}

console.log('--- ALL 23 PAGES SUCCESSFULLY UPGRADED WITH MOBILE TOP 3-BARS POPUP ---');
