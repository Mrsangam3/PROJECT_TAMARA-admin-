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

    // 2. Mark All as Read Logic
    const markReadBtn = document.getElementById('markReadBtn');
    if (markReadBtn) {
        markReadBtn.addEventListener('click', () => {
            // Remove the top "4 New" badge
            const badge = document.getElementById('newBadge');
            if (badge) badge.style.display = 'none';

            // Remove all blue unread dots from the notifications
            const unreadDots = document.querySelectorAll('.unread-indicator');
            unreadDots.forEach(dot => dot.style.display = 'none');

            // Fade previously unread cards
            const unreadCards = document.querySelectorAll('.bg-white.border-slate-100:not(.opacity-80)');
            unreadCards.forEach(card => card.classList.add('opacity-80'));
            
            // Remove the blue indicator from the filter chip
            const unreadChip = document.querySelector('button span.bg-blue-600.w-1\\.5');
            if(unreadChip) unreadChip.style.display = 'none';
        });
    }

    // 3. Back to Home (or More) logic based on the top left button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // The mockup says "<- Home", so we redirect to dashboard
            // Alternatively, you could change this to '/admin/more' to go back one step
            window.location.href = '/admin/dashboard';
        });
    }

    // 4. Interactive Filter Chips
    const chipsContainer = document.querySelector('.overflow-x-auto');
    if (chipsContainer) {
        const chips = chipsContainer.querySelectorAll('button');
        chips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                const targetBtn = e.target.closest('button');
                
                chips.forEach(c => {
                    c.className = 'bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1';
                });
                
                targetBtn.className = 'bg-[#0B132B] text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1';
            });
        });
    }
});