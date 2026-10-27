const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html') && f !== 'admin-login.html' && f !== 'index.html');

console.log(`Checking ${files.length} HTML files for header modernization...`);

files.forEach(file => {
    const filePath = path.join(publicDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Upgrade <header class="..."> height and borders
    html = html.replace(/<header\s+class="([^"]*)"/gi, (match, classes) => {
        let newClasses = classes
            .replace(/\bh-16\b/g, '')
            .replace(/\bborder-slate-200(\/80)?\b/g, 'border-[#ede4d5]')
            .replace(/\bbg-slate-100\b/g, 'bg-[#fdfbf7]')
            .trim();
        
        if (!newClasses.includes('min-h-[72px]')) {
            newClasses = 'min-h-[72px] py-3.5 ' + newClasses;
        }
        if (!newClasses.includes('border-[#ede4d5]')) {
            newClasses += ' border-b border-[#ede4d5]';
        }
        if (!newClasses.includes('shadow-2xs') && !newClasses.includes('shadow-sm')) {
            newClasses += ' shadow-2xs';
        }
        return `<header class="${newClasses.replace(/\s+/g, ' ').trim()}"`;
    });

    // 2. Add whitespace-nowrap and h-10 to top header action buttons and links
    // Match header block
    const headerRegex = /<header[\s\S]*?<\/header>/i;
    const headerMatch = html.match(headerRegex);
    if (headerMatch) {
        let headerContent = headerMatch[0];
        
        // Ensure buttons and <a> inside header have whitespace-nowrap and flex-shrink-0
        headerContent = headerContent.replace(/<(a|button)\s+([^>]*class=")([^"]*)(")/gi, (m, tag, pre, cls, post) => {
            let updatedCls = cls;
            if (!updatedCls.includes('whitespace-nowrap')) updatedCls += ' whitespace-nowrap';
            if (!updatedCls.includes('flex-shrink-0')) updatedCls += ' flex-shrink-0';
            // Replace slate colors
            updatedCls = updatedCls
                .replace(/bg-amber-600\s+hover:bg-amber-700\s+text-white/g, 'bg-gradient-to-r from-[#e2b842] to-[#c59b27] hover:from-[#f1d278] hover:to-[#e2b842] text-[#14070f]')
                .replace(/bg-slate-900\s+hover:bg-black\s+text-white/g, 'bg-[#14070f] hover:bg-[#1f0a18] text-[#faf6f0] border border-[#3d1630]');
            return `<${tag} ${pre}${updatedCls.replace(/\s+/g, ' ').trim()}${post}`;
        });

        // Ensure title in header is not clipped (add leading-snug or leading-tight)
        headerContent = headerContent
            .replace(/HavenHostel/g, 'TAAMARA CO-LIVE SPACES')
            .replace(/text-slate-900/g, 'text-[#1a1016]')
            .replace(/text-slate-500/g, 'text-[#c59b27]');

        html = html.replace(headerRegex, headerContent);
    }

    // 3. Make sure no remaining "Good day, Warden" exists
    if (html.includes('Good day, Warden')) {
        html = html.replace(/Good day, Warden/g, 'Good day, Administrator');
        changed = true;
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Harmonized header in: ${file}`);
});

console.log('All headers successfully modernized!');
