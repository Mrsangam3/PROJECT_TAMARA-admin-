const fs = require('fs');
const path = require('path');

// 1. Fix floor-rooms.html View Details button
let floor1 = fs.readFileSync('public/floor-rooms.html', 'utf8');
floor1 = floor1.replace(/window\.location\.href='\/admin\/tenants'/g, "window.location.href='/admin/room-details'");
fs.writeFileSync('public/floor-rooms.html', floor1);

// 2. Fix floor-2-rooms.html View Details button
let floor2 = fs.readFileSync('public/floor-2-rooms.html', 'utf8');
floor2 = floor2.replace(/window\.location\.href='\/admin\/tenants'/g, "window.location.href='/admin/room-details?room=201'");
fs.writeFileSync('public/floor-2-rooms.html', floor2);

// 3. Fix floor-3-rooms.html View Details button
let floor3 = fs.readFileSync('public/floor-3-rooms.html', 'utf8');
floor3 = floor3.replace(/window\.location\.href='\/admin\/tenants'/g, "window.location.href='/admin/room-details?room=301'");
fs.writeFileSync('public/floor-3-rooms.html', floor3);

// 4. In rooms.html, ensure room cards have links to room-details
let rooms = fs.readFileSync('public/rooms.html', 'utf8');
rooms = rooms.replace(/onclick="showRoomDetailModal\([^)]*\)"/g, "onclick=\"window.location.href='/admin/room-details'\"");
fs.writeFileSync('public/rooms.html', rooms);

// 5. In finance.html, ensure Record Entry and Operating Expenses buttons link properly
let fin = fs.readFileSync('public/finance.html', 'utf8');
if (!fin.includes('/admin/record-entry')) {
    fin = fin.replace(/onclick="openRecordEntryModal\(\)"/g, "onclick=\"window.location.href='/admin/record-entry'\"");
}
if (!fin.includes('/admin/expenses-ledger')) {
    fin = fin.replace(/href="[^"]*expenses[^"]*"/gi, 'href="/admin/expenses-ledger"');
}
fs.writeFileSync('public/finance.html', fin);

console.log('Inter-screen navigation links successfully aligned!');
