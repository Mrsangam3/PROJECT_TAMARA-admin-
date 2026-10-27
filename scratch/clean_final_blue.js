const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const finalFixes = [
    { from: /focus:ring-blue-600/g, to: 'focus:ring-[#e2b842]' },
    { from: /ring-blue-600\/[0-9]+/g, to: 'ring-[#e2b842]/40' },
    { from: /text-blue-950/g, to: 'text-[#1a1016]' },
    { from: /bg-blue-400/g, to: 'bg-[#e2b842]' },
    { from: /to-blue-950/g, to: 'to-[#14070f]' },
    { from: /border-blue-900\/[0-9]+/g, to: 'border-[#3d1630]' },
    { from: /from-\[\#0B132B\]/g, to: 'from-[#14070f]' },
    { from: /bg-\[\#0B132B\]/g, to: 'bg-[#14070f]' }
];

for (const file of files) {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const fix of finalFixes) {
        if (fix.from.test(content)) {
            content = content.replace(fix.from, fix.to);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Cleaned final blue lines in: ${file}`);
    }
}
