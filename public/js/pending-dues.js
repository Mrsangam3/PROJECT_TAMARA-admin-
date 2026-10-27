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

    // 2. Back Button (Routes back to the main Tenants screen)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '/admin/tenants';
        });
    }

    // 3. Routing "Collect Payment Now" buttons to the Collection terminal
    const collectButtons = document.querySelectorAll('.collect-btn');
    collectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = '/admin/collect-due';
        });
    });

    // 4. "Record Payment" floating button -> Collection terminal
    const floatingRecordBtn = document.querySelector('.fixed.bottom-\\[65px\\] button');
    if (floatingRecordBtn) {
        floatingRecordBtn.addEventListener('click', () => {
            window.location.href = '/admin/collect-due';
        });
    }
});