const http = require('http');

function get(path, follow = false) {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:3000' + path, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, headers: res.headers, body: data });
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log('--- Testing /admin/finance ---');
    const fin = await get('/admin/finance');
    console.log('Finance status:', fin.statusCode);
    const hasSeparateBtn = fin.body.includes('id="btnRecordEntry"');
    console.log('Has separate btnRecordEntry?', hasSeparateBtn);
    const hasRecordExpenseLink = fin.body.includes('href="/admin/record-entry?type=expense"');
    console.log('Has href="/admin/record-entry?type=expense"?', hasRecordExpenseLink);

    console.log('\n--- Testing /admin/record-entry ---');
    const rec = await get('/admin/record-entry');
    console.log('Record Entry status:', rec.statusCode);
    const hasExpenseTab = rec.body.includes('id="tabExpense"');
    const hasParamCheck = rec.body.includes('urlParams.get(\'type\') === \'expense\'');
    console.log('Has tabExpense?', hasExpenseTab);
    console.log('Has URL param check for expense?', hasParamCheck);

    console.log('\n--- Testing /admin/new-expense redirect ---');
    const red = await get('/admin/new-expense');
    console.log('New Expense status:', red.statusCode, 'Location:', red.headers.location);

    if (!hasSeparateBtn && hasRecordExpenseLink && rec.statusCode === 200 && red.statusCode === 302) {
        console.log('\n ALL CHECKS PASSED SUCCESSFULLY!');
    } else {
        console.error('\n CHECKS FAILED!');
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
