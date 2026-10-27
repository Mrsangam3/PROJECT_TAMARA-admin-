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

    // 2. Back Button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '/admin/dashboard'; // Route back to Home as per mockup
        });
    }

    // 3. Amount Chips Logic (Updates Input & Floating Action Bar)
    const amountChips = document.querySelectorAll('.amount-chip');
    const amountInput = document.getElementById('amountInput');
    const floatingAmount = document.getElementById('floatingAmount');

    amountChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            // Reset all chips to default gray state
            amountChips.forEach(c => {
                c.className = 'amount-chip flex-1 bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold py-2 rounded-lg transition';
            });
            
            // Set clicked chip to active blue state
            e.target.className = 'amount-chip flex-1 bg-blue-600 text-white text-xs font-bold py-2 rounded-lg shadow-sm transition';
            
            // Update the input field and floating bar value
            const newValue = e.target.getAttribute('data-amount');
            amountInput.value = newValue;
            
            floatingAmount.innerText = newValue;
        });
    });

    // 4. Custom CSS Toggle Interactions (Handling the UI change manually for absolute positioning)
    const toggles = document.querySelectorAll('.toggle-checkbox');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                e.target.style.transform = 'translateX(1.25rem)'; // move right
                e.target.style.borderColor = '#2563eb';
            } else {
                e.target.style.transform = 'translateX(0)'; // move left
                e.target.style.borderColor = '#cbd5e1';
            }
        });
    });
});