document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Setup Bottom Navigation Routing
    const navButtons = [
        { id: 'navHome', path: '/admin/dashboard' },
        { id: 'navTenants', path: '/admin/tenants' },
        { id: 'navRooms', path: '/admin/rooms' },
        { id: 'navFinance', path: '/admin/finance' },
        { id: 'navMore', path: '/admin/more' }
    ];

    navButtons.forEach(btn => {
        const element = document.getElementById(btn.id);
        if (element) {
            element.addEventListener('click', () => {
                window.location.href = btn.path;
            });
        }
    });
    // 2. Notifications Navigation
    const navNotifications = document.getElementById('navNotifications');
    if (navNotifications) {
        navNotifications.addEventListener('click', () => {
            window.location.href = '/admin/notifications'; 
        });
    }

    // 3. Logout Logic
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Simulate ending the session and redirecting back to login
            console.log("Logging out...");
            window.location.href = '/admin/login';
        });
    }
});