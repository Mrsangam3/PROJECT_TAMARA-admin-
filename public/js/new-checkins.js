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

    // 3. Routing "Collect Deposit" buttons to the Collection terminal
    // We target the dark blue button specifically for Tariq's card
    const collectDepositBtn = document.querySelector('button.bg-\\[\\#0B132B\\]');
    if (collectDepositBtn && collectDepositBtn.innerText.includes('Collect Deposit')) {
        collectDepositBtn.addEventListener('click', () => {
            // Reusing the same payment terminal from earlier!
            window.location.href = '/admin/collect-due';
        });
    }
});