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
                // Instantly redirect to the specified path
                window.location.href = btn.path;
            });
        }
    });

    // 2. Interactive Filter Chips (Visual effect for testing)
    const chips = document.querySelectorAll('.overflow-x-auto button');
    
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            // Reset all chips to default unselected style
            chips.forEach(c => {
                c.className = 'bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm';
            });
            
            // Set clicked chip to the active dark style
            e.target.className = 'bg-[#0B132B] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm';
        });
    });
});

// Inside DOMContentLoaded of tenants.js
    const paidChip = document.getElementById('paidFilterChip');
    if (paidChip) {
        paidChip.addEventListener('click', () => {
            window.location.href = '/admin/paid-tenants';
        });
    }

// Inside DOMContentLoaded of tenants.js
    const pendingChip = document.getElementById('pendingFilterChip');
    if (pendingChip) {
        pendingChip.addEventListener('click', () => {
            window.location.href = '/admin/pending-dues';
        });
    }

// Inside DOMContentLoaded of tenants.js
    const checkinsChip = document.getElementById('checkinsFilterChip');
    if (checkinsChip) {
        checkinsChip.addEventListener('click', () => {
            window.location.href = '/admin/new-checkins';
        });
    }