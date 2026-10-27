const http = require('http');

function get(path) {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:3000' + path, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, body: data });
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log('--- Testing /admin/finance ---');
    const fin = await get('/admin/finance');
    console.log('Finance status:', fin.statusCode);
    const hasOpExpLink = fin.body.includes('href="/admin/expenses-ledger"') && fin.body.includes('Operating Expenses');
    console.log('Finance has Operating Expenses -> /admin/expenses-ledger:', hasOpExpLink);

    console.log('\n--- Testing /admin/expenses-ledger ---');
    const exp = await get('/admin/expenses-ledger');
    console.log('Expenses Ledger status:', exp.statusCode);
    const hasTitle = exp.body.includes('Expenses Ledger');
    const hasDisbursed = exp.body.includes('$8,120');
    const hasVoucher1 = exp.body.includes('#EXP-2025-104');
    const hasVoucher2 = exp.body.includes('#EXP-2025-102');
    const hasAddBtn = exp.body.includes('Add New Expense Voucher');
    const hasRecordEntryLink = exp.body.includes('/admin/record-entry?type=expense');

    console.log('Has Title?', hasTitle);
    console.log('Has $8,120 disbursed?', hasDisbursed);
    console.log('Has #EXP-2025-104?', hasVoucher1);
    console.log('Has #EXP-2025-102?', hasVoucher2);
    console.log('Has Add New Expense Voucher?', hasAddBtn);
    console.log('Has link to /admin/record-entry?type=expense?', hasRecordEntryLink);

    console.log('\n--- Testing alternative routes ---');
    const alt1 = await get('/admin/finance/expenses');
    console.log('/admin/finance/expenses status:', alt1.statusCode);
    const alt2 = await get('/admin/operating-expenses');
    console.log('/admin/operating-expenses status:', alt2.statusCode);

    if (hasOpExpLink && exp.statusCode === 200 && hasTitle && hasDisbursed && hasVoucher1 && alt1.statusCode === 200) {
        console.log('\n ALL EXPENSES LEDGER CHECKS PASSED SUCCESSFULLY!');
    } else {
        console.error('\n CHECKS FAILED!');
        process.exit(1);
    }
}

run().catch(err => {
    console.error(err);
    process.exit(1);
});
