const http = require('http');

http.get('http://localhost:3000/admin/unread-notifications', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('Status code:', res.statusCode);
        console.log('Contains Marcus Vance:', data.includes('Marcus Vance'));
        console.log('Contains AC Leak:', data.includes('AC Leak'));
        console.log('Contains Liam O\'Connor:', data.includes("Liam O'Connor"));
        console.log('Contains Fire Exit Sensor:', data.includes('Fire Exit Sensor Triggered'));
        console.log('Contains Assign Duty Technician:', data.includes('Assign Duty Technician'));
        console.log('Contains View Camera Feed:', data.includes('View Camera Feed'));
        console.log('Length:', data.length);
    });
}).on('error', err => {
    console.error('Error:', err.message);
});
