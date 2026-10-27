const fs = require('fs');

const report = JSON.parse(fs.readFileSync('scratch/blue_report.json', 'utf8'));

for (const [file, items] of Object.entries(report)) {
    console.log(`\n=================== ${file} (${items.length} items) ===================`);
    items.slice(0, 10).forEach(item => {
        console.log(`[L${item.lineNum}] ${item.snippet.substring(0, 120)}`);
    });
}
