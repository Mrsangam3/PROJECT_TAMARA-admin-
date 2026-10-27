document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Handlers
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
                // Change from console.log to an actual redirect
                window.location.href = btn.path; 
            });
        }
    });

// 2. Quick Action Buttons Listeners
    const actionButtons = document.querySelectorAll('button');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const actionText = e.currentTarget.innerText.trim();
            
            // Route based on the text inside the Quick Action button
            if (actionText === 'Collect Due') {
                window.location.href = '/admin/collect-due';
            } else if (actionText === 'New Expense') {
                window.location.href = '/admin/record-entry?type=expense';
            } else if (actionText === 'Assign Bed') {
                // Instantly route to the Assign Bed screen
                window.location.href = '/admin/assign-bed';
            } else if (actionText) {
                console.log(`Action triggered: ${actionText}`);
            }
        });
    });

    // 3. Mark Read Alert Interaction
    const markReadBtn = document.querySelector('button.text-blue-600');
    if(markReadBtn && markReadBtn.innerText === 'Mark read') {
        markReadBtn.addEventListener('click', () => {
            const badge = document.querySelector('.bg-red-600');
            if(badge) badge.style.display = 'none'; // Hide the notification badge count
            console.log('All alerts marked as read.');
        });
    }
});