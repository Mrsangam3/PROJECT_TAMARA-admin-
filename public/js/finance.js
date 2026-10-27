document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Setup Navigation Routing
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

    // 2. Interactive Tabs
    const tabsContainer = document.querySelector('.bg-slate-100.p-1.rounded-xl');
    if (tabsContainer) {
        const tabs = tabsContainer.querySelectorAll('button');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                // Reset all tabs to inactive state
                tabs.forEach(t => {
                    t.className = 'flex-1 text-slate-500 hover:text-slate-700 text-xs font-semibold py-2 rounded-lg transition';
                });
                
                // Set clicked tab to active style
                e.target.className = 'flex-1 bg-white shadow-sm text-slate-800 text-xs font-bold py-2 rounded-lg transition';
            });
        });
    }
});