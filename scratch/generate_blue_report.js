const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));
const blueRegex = /(blue-[0-9]+|#2563eb|#1d4ed8|#3b82f6|#1e40af|#60a5fa|#93c5fd|#dbeafe|#eff6ff)/gi;

const detailedReport = {};

for (const file of files) {
    const lines = fs.readFileSync(path.join('public', file), 'utf8').split('\n');
    const matchedLines = [];
    lines.forEach((line, index) => {
        if (blueRegex.test(line)) {
            matchedLines.push({
                lineNum: index + 1,
                snippet: line.trim()
            });
        }
    });
    if (matchedLines.length > 0) {
        detailedReport[file] = matchedLines;
    }
}

fs.writeFileSync('scratch/blue_report.json', JSON.stringify(detailedReport, null, 2), 'utf8');
console.log('Detailed blue report written to scratch/blue_report.json');
