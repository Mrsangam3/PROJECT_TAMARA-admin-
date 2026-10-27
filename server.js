const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // To parse incoming JSON payloads

// Public Home / Landing Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Accurate TAAMARA CO-LIVE SPACES Data API
app.get('/api/hostel-details', (req, res) => {
    res.json({
        name: "TAAMARA CO-LIVE SPACES",
        tagline: "Premium Co-Living for Men & Women",
        address: "Road Number 1A, Nanakramguda, Hyderabad, Telangana 500032, India",
        landmark: "Financial District / Continental Hospitals",
        phones: ["+91 7386647564", "+91 9848427564"],
        whatsapp: "+91 7386647564",
        maps: {
            destination: "Road Number 1A, Nanakramguda, Hyderabad, Telangana, India",
            embed: "https://www.google.com/maps?q=Road+Number+1A%2C+Nanakramguda%2C+Hyderabad%2C+Telangana&output=embed"
        },
        sharingOptions: [
            { id: 1, title: "1 Sharing", subtitle: "A room of your own", rent: 18000, suitable: "Professionals who value privacy", features: ["Fully furnished room", "Dedicated study & work table", "Separate wardrobe", "3 times food", "High-speed WiFi"] },
            { id: 2, title: "2 Sharing", subtitle: "Space for two", rent: 12000, suitable: "Professionals & students", features: ["Fully furnished room", "Dedicated study & work table", "Separate wardrobes", "3 times food", "Daily housekeeping"] },
            { id: 3, title: "3 Sharing", subtitle: "The balanced choice", rent: 9000, suitable: "Working professionals & students", features: ["Fully furnished & ventilated", "Separate wardrobes", "3 times food", "High-speed WiFi", "Daily housekeeping"] },
            { id: 4, title: "4 Sharing", subtitle: "Community living", rent: 7200, suitable: "Students & young professionals", features: ["Fully furnished & ventilated", "Separate wardrobes", "3 times food", "Power backup", "High-speed WiFi"] },
            { id: 5, title: "5 Sharing", subtitle: "The social suite", rent: 6200, suitable: "Those who love company", features: ["Fully furnished & ventilated", "Separate wardrobes", "3 times food", "Daily housekeeping", "High-speed WiFi"] }
        ],
        amenities: [
            "3 Times Food", "High Speed WiFi", "Biometric Entry", "24/7 Cameras",
            "Study & Work Table", "Separate Wardrobes", "Power Backup", "Daily Housekeeping",
            "Fully Furnished Rooms", "Fully Ventilated Rooms", "Washing Machines",
            "Self Cooking", "Sitting Lounge", "Fridge & Water Dispenser"
        ]
    });
});

// Admin Login
app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-login.html'));
});

// Admin Auth POST
app.post('/api/admin/login', (req, res) => {
    const { loginId, password } = req.body;
    res.json({ success: true, redirectUrl: '/admin/dashboard' });
});

// Admin Dashboard
app.get('/admin/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Admin Tenants / Residents
app.get('/admin/tenants', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tenants.html'));
});
app.get('/admin/residents', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tenants.html'));
});

// Admin Rooms & Beds
app.get('/admin/rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rooms.html'));
});

// Admin Add Room Subscreen (Matches Mockup)
app.get('/admin/add-room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add-room.html'));
});
app.get('/admin/rooms/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add-room.html'));
});

// Admin Room Details & Booking Subscreen (Matches Mockup)
app.get('/admin/room-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'room-details.html'));
});
app.get('/admin/rooms/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'room-details.html'));
});
app.get('/admin/book-room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'room-details.html'));
});

// Admin Floor Navigation Subscreen (Floor 1 Rooms)
app.get('/admin/floor-rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-rooms.html'));
});
app.get('/admin/rooms/floor-1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-rooms.html'));
});

// Admin Floor Navigation Subscreen (Floor 2 Rooms)
app.get('/admin/floor-2-rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-2-rooms.html'));
});
app.get('/admin/rooms/floor-2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-2-rooms.html'));
});

// Admin Floor Navigation Subscreen (Floor 3 Rooms)
app.get('/admin/floor-3-rooms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-3-rooms.html'));
});
app.get('/admin/rooms/floor-3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'floor-3-rooms.html'));
});

// Admin Finance
app.get('/admin/finance', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'finance.html'));
});

// Admin Expenses Ledger Subscreen (Matches Mockup)
app.get('/admin/expenses-ledger', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expenses-ledger.html'));
});
app.get('/admin/finance/expenses', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expenses-ledger.html'));
});
app.get('/admin/operating-expenses', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expenses-ledger.html'));
});

// Admin Record Entry Subscreen (Matches Mockup)
app.get('/admin/record-entry', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'record-entry.html'));
});
app.get('/admin/finance/record-entry', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'record-entry.html'));
});

// Admin More & Profile Menu (Matches Mockup)
app.get('/admin/more', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'more.html'));
});
app.get('/admin/more-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'more.html'));
});
app.get('/admin/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'more.html'));
});

// Admin View & Edit Profile Subscreen (Matches Mockup)
app.get('/admin/view-edit-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view-edit-profile.html'));
});
app.get('/admin/profile/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view-edit-profile.html'));
});
app.get('/admin/edit-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view-edit-profile.html'));
});

// Admin Logout Confirmation Subscreen (Matches Mockup)
app.get('/admin/logout-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout-confirmation.html'));
});
app.get('/admin/logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout-confirmation.html'));
});
app.get('/admin/confirm-logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout-confirmation.html'));
});

// Admin Notifications
app.get('/admin/notifications', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notifications.html'));
}); 
app.get('/admin/unread-notifications', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'unread-notifications.html'));
});
app.get('/admin/notifications/unread', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'unread-notifications.html'));
}); 

// Admin Maintenance Requests (Matches Mockup)
app.get('/admin/maintenance', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'maintenance.html'));
});
app.get('/admin/maintenance-requests', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'maintenance.html'));
});
app.get('/admin/work-orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'maintenance.html'));
});

// Admin Assign Bed
app.get('/admin/assign-bed', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assign-bed.html'));
});

// Admin Collect Due
app.get('/admin/collect-due', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'collect-due.html'));
});

// Admin New Expense (redirect to record entry in expense mode)
app.get('/admin/new-expense', (req, res) => {
    res.redirect('/admin/record-entry?type=expense');
});

// Admin Paid Tenants
app.get('/admin/paid-tenants', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paid-tenants.html'));
});

// Admin Pending Dues
app.get('/admin/pending-dues', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pending-dues.html'));
});

// Admin New Check-ins
app.get('/admin/new-checkins', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new-checkins.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TAAMARA CO-LIVE SPACES Server running on port ${PORT}`));