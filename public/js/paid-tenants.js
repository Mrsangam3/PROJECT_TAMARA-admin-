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

    // 3. Floating Action Bar (Dispatch Button) Interaction
    const dispatchBtn = document.querySelector('.bg-\\[\\#0B132B\\] button');
    if (dispatchBtn) {
        dispatchBtn.addEventListener('click', () => {
            // Visual feedback of sending
            const originalText = dispatchBtn.innerHTML;
            dispatchBtn.innerHTML = 'Sending...';
            dispatchBtn.disabled = true;
            
            // Simulate a network delay
            setTimeout(() => {
                dispatchBtn.innerHTML = 'Sent! ✓';
                dispatchBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                dispatchBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                
                // Revert after 3 seconds
                setTimeout(() => {
                    dispatchBtn.innerHTML = originalText;
                    dispatchBtn.disabled = false;
                    dispatchBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    dispatchBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
                }, 3000);
            }, 1500);
        });
    }
});