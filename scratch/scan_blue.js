const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));
const blueHexes = [
    '#2563eb', '#1d4ed8', '#3b82f6', '#1e40af', '#60a5fa', '#93c5fd', '#dbeafe', '#eff6ff',
    '#0284c7', '#0369a1', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd', '#e0f2fe', '#f0f9ff'
];

let totalOccurrences = 0;
const report = {};

for (const file of files) {
    const content = fs.readFileSync(path.join('public', file), 'utf8');
    const matches = [];
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
        const lower = line.toLowerCase();
        if (/blue-[0-9]+/i.test(line) || blueHexes.some(h => lower.includes(h))) {
            matches.push({ lineNum: idx + 1, text: line.trim() });
        }
    });
    if (matches.length > 0) {
        report[file] = matches;
        totalOccurrences += matches.length;
    }
}

console.log(`Total files with blue: ${Object.keys(report).length}`);
console.log(`Total lines with blue: ${totalOccurrences}`);
console.log('--- Breakdown by file ---');
for (const [file, matches] of Object.entries(report)) {
    console.log(`${file}: ${matches.length} matches`);
}
