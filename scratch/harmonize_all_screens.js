const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

// Precise replacements to eliminate blue and apply luxury TAAMARA styling
const replacements = [
    // Hex colors
    { from: /#2563eb/gi, to: '#c59b27' },
    { from: /#1D4ED8/gi, to: '#14070f' },
    { from: /#3b82f6/gi, to: '#e2b842' },
    { from: /#1e40af/gi, to: '#1f0a18' },
    { from: /#60a5fa/gi, to: '#f1d278' },
    { from: /#93c5fd/gi, to: '#f1d278' },
    { from: /#dbeafe/gi, to: '#fdfbf7' },
    { from: /#eff6ff/gi, to: '#faf6f0' },
    { from: /#0284c7/gi, to: '#c59b27' },
    { from: /#0369a1/gi, to: '#a37c18' },
    { from: /#0ea5e9/gi, to: '#e2b842' },

    // Tailwind Blue Backgrounds
    { from: /bg-blue-50\/[0-9]+/g, to: 'bg-[#fdfbf7]' },
    { from: /bg-blue-100\/[0-9]+/g, to: 'bg-[#e2b842]/15' },
    { from: /bg-blue-500\/[0-9]+/g, to: 'bg-[#2a0e21]' },
    { from: /bg-blue-950\/[0-9]+/g, to: 'bg-[#1f0a18]' },
    { from: /\bbg-blue-50\b/g, to: 'bg-[#fdfbf7]' },
    { from: /\bbg-blue-100\b/g, to: 'bg-[#e2b842]/15' },
    { from: /\bbg-blue-200\b/g, to: 'bg-[#ede4d5]' },
    { from: /\bbg-blue-500\b/g, to: 'bg-[#e2b842]' },
    { from: /\bbg-blue-600\b/g, to: 'bg-[#14070f]' },
    { from: /\bbg-blue-700\b/g, to: 'bg-[#1f0a18]' },
    { from: /\bbg-blue-800\b/g, to: 'bg-[#14070f]' },
    { from: /\bbg-blue-900\b/g, to: 'bg-[#14070f]' },
    { from: /\bbg-blue-950\b/g, to: 'bg-[#14070f]' },

    // Tailwind Blue Text
    { from: /\btext-blue-900\b/g, to: 'text-[#1a1016]' },
    { from: /\btext-blue-800\b/g, to: 'text-[#c59b27]' },
    { from: /\btext-blue-700\b/g, to: 'text-[#c59b27]' },
    { from: /\btext-blue-600\b/g, to: 'text-[#c59b27]' },
    { from: /\btext-blue-500\b/g, to: 'text-[#e2b842]' },
    { from: /\btext-blue-400\b/g, to: 'text-[#f1d278]' },
    { from: /\btext-blue-300\b/g, to: 'text-[#f1d278]' },
    { from: /\btext-blue-200\b/g, to: 'text-[#ede4d5]' },
    { from: /\btext-blue-100\b/g, to: 'text-[#faf6f0]' },
    { from: /\btext-blue-50\b/g, to: 'text-[#faf6f0]' },

    // Tailwind Blue Borders
    { from: /border-blue-100\/[0-9]+/g, to: 'border-[#ede4d5]' },
    { from: /border-blue-200\/[0-9]+/g, to: 'border-[#ede4d5]' },
    { from: /border-blue-500\/[0-9]+/g, to: 'border-[#e2b842]/30' },
    { from: /border-blue-800\/[0-9]+/g, to: 'border-[#3d1630]' },
    { from: /\bborder-blue-50\b/g, to: 'border-[#ede4d5]' },
    { from: /\bborder-blue-100\b/g, to: 'border-[#ede4d5]' },
    { from: /\bborder-blue-200\b/g, to: 'border-[#ede4d5]' },
    { from: /\bborder-blue-300\b/g, to: 'border-[#ede4d5]' },
    { from: /\bborder-blue-400\b/g, to: 'border-[#e2b842]/30' },
    { from: /\bborder-blue-500\b/g, to: 'border-[#e2b842]' },
    { from: /\bborder-blue-600\b/g, to: 'border-[#c59b27]' },
    { from: /\bborder-blue-700\b/g, to: 'border-[#c59b27]' },
    { from: /\bborder-blue-800\b/g, to: 'border-[#3d1630]' },
    { from: /\bborder-l-blue-600\b/g, to: 'border-l-[#c59b27]' },
    { from: /\bborder-l-blue-500\b/g, to: 'border-l-[#e2b842]' },
    { from: /\bborder-2 border-blue-600\b/g, to: 'border-2 border-[#c59b27]' },
    { from: /\bdivide-blue-200\/[0-9]+/g, to: 'divide-[#ede4d5]' },

    // Hover states with blue
    { from: /\bhover:bg-blue-50\b/g, to: 'hover:bg-[#f7f2ea]' },
    { from: /\bhover:bg-blue-100\b/g, to: 'hover:bg-[#ede4d5]' },
    { from: /\bhover:bg-blue-700\b/g, to: 'hover:bg-[#1f0a18]' },
    { from: /\bhover:bg-blue-800\b/g, to: 'hover:bg-[#14070f]' },
    { from: /\bhover:text-blue-700\b/g, to: 'hover:text-[#a37c18]' },
    { from: /\bhover:text-blue-800\b/g, to: 'hover:text-[#a37c18]' },

    // Focus rings with blue
    { from: /\bfocus:ring-blue-500\b/g, to: 'focus:ring-[#e2b842]' },
    { from: /\bfocus:border-blue-500\b/g, to: 'focus:border-[#c59b27]' },
    { from: /\bfocus:ring-blue-200\b/g, to: 'focus:ring-[#e2b842]/20' }
];

console.log('--- Harmonizing Colors & Alignments across All Screens ---');

let modifiedCount = 0;

for (const file of files) {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    for (const r of replacements) {
        content = content.replace(r.from, r.to);
    }

    // Alignment & Polish Fixes:
    // 1. Ensure page header font styling uses Cormorant Garamond for main page titles
    content = content.replace(/<h1 class="([^"]*)"/g, (match, classes) => {
        if (!classes.includes('font-serif')) {
            return `<h1 class="${classes} font-serif"`;
        }
        return match;
    });

    // 2. Ensure logo avatars have the authentic TAAMARA gold gradient
    content = content.replace(/from-blue-600 to-indigo-600/g, 'from-[#e2b842] to-[#c59b27]');
    content = content.replace(/from-blue-500 to-blue-700/g, 'from-[#e2b842] to-[#c59b27]');

    // 3. Ensure button text color contrast when background is dark burgundy
    content = content.replace(/bg-\[#14070f\] hover:bg-\[#1f0a18\] text-white/g, 'bg-[#14070f] hover:bg-[#1f0a18] text-[#faf6f0]');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Harmonized: ${file}`);
        modifiedCount++;
    } else {
        console.log(`- Already pristine: ${file}`);
    }
}

console.log(`\nSuccessfully harmonized ${modifiedCount} files.`);
