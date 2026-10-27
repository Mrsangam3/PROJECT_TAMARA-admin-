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

    // 2. Interactive Filter Chips (Visual Toggle)
    const chipsContainer = document.querySelector('.overflow-x-auto');
    if (chipsContainer) {
        const chips = chipsContainer.querySelectorAll('button');
        chips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                const targetBtn = e.target.closest('button');
                
                // Reset styles
                chips.forEach(c => {
                    c.className = 'bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm';
                });
                
                // Set active style
                targetBtn.className = 'bg-[#0B132B] text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm';
            });
        });
    }

    // 3. Assign Bed Routing (On Room 102)
    const assignBedBtn = document.getElementById('assignBedBtn');
    if (assignBedBtn) {
        assignBedBtn.addEventListener('click', () => {
            window.location.href = '/admin/assign-bed';
        });
    }
});