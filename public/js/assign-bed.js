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

    // 2. Back Button (Goes back to Rooms screen)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '/admin/rooms';
        });
    }

    // 3. Lease Duration Toggle Logic
    const leaseToggleContainer = document.getElementById('leaseToggle');
    if (leaseToggleContainer) {
        const buttons = leaseToggleContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Reset all to default unselected style
                buttons.forEach(btn => {
                    btn.className = 'flex-1 text-slate-600 text-xs font-semibold py-2 rounded-lg transition hover:text-slate-800';
                });
                
                // Set clicked button to active blue style
                e.target.className = 'flex-1 bg-white shadow-sm text-blue-700 text-xs font-bold py-2 rounded-lg transition border border-slate-100';
            });
        });
    }
});