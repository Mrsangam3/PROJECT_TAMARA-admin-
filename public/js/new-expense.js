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

    // 2. Back Button -> Redirect to Dashboard
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '/admin/dashboard';
        });
    }

    // 3. Expense Category Chips Interaction
    const categoryChips = document.getElementById('categoryChips');
    if (categoryChips) {
        const buttons = categoryChips.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Reset all to default slate style
                buttons.forEach(btn => {
                    btn.className = 'bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1.5 transition hover:bg-slate-100';
                    // Strip the icon color styling if we added it
                    const icon = btn.querySelector('svg');
                    if (icon) {
                        icon.setAttribute('fill', 'none');
                    }
                });
                
                // Set clicked button to active blue style
                const targetBtn = e.target.closest('button');
                targetBtn.className = 'bg-blue-600 text-white text-[11px] font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1.5 transition';
                
                const activeIcon = targetBtn.querySelector('svg');
                if (activeIcon) {
                    activeIcon.setAttribute('fill', 'currentColor'); // Make icon solid for active
                }
            });
        });
    }

    // 4. Update the bottom submit button automatically when Amount changes
    const amountInput = document.getElementById('expenseAmount');
    const recordBtnSpan = document.querySelector('#recordExpenseBtn span');
    
    if (amountInput && recordBtnSpan) {
        amountInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (val === '') {
                recordBtnSpan.innerText = 'Record Expense (₹0.00)';
            } else {
                recordBtnSpan.innerText = `Record Expense (₹${val})`;
            }
        });
    }

    // 5. CSS Toggle Interactivity for the Tax Toggle
    const taxToggle = document.getElementById('taxToggle');
    if(taxToggle) {
        taxToggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                e.target.style.transform = 'translateX(1.25rem)';
            } else {
                e.target.style.transform = 'translateX(0)';
            }
        });
    }
});