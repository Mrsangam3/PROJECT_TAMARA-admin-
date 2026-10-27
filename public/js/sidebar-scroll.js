// Sidebar Scroll & Mobile Navigation Popup Controller for TAAMARA Admin Portal
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Desktop Sidebar Smooth Scrolling ---
    const desktopSidebar = document.getElementById('desktopSidebar') || document.querySelector('aside');
    if (desktopSidebar) {
        const scrollArea = desktopSidebar.querySelector('.custom-scrollbar') || document.getElementById('sidebarScrollArea');
        if (scrollArea) {
            scrollArea.style.touchAction = 'pan-y';

            desktopSidebar.addEventListener('wheel', (e) => {
                if (scrollArea.scrollHeight > scrollArea.clientHeight) {
                    if (!scrollArea.contains(e.target)) {
                        scrollArea.scrollTop += e.deltaY;
                    }
                }
            }, { passive: true });

            const activeItem = scrollArea.querySelector('.bg-\\[\\#e2b842\\]\\/15, .bg-amber-500\\/15, .bg-amber-500, [aria-current="page"]');
            if (activeItem) {
                setTimeout(() => {
                    const itemRect = activeItem.getBoundingClientRect();
                    const areaRect = scrollArea.getBoundingClientRect();
                    if (itemRect.bottom > areaRect.bottom || itemRect.top < areaRect.top) {
                        activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    }
                }, 120);
            }
        }
    }

    // --- 2. Mobile Dashboard Navigation Popup (Small 3-bars Button) ---
    const popupModal = document.getElementById('mobileNavPopupModal');
    const popupPanel = document.getElementById('mobileNavPopupPanel');
    const closeBtn = document.getElementById('closeMobileNavPopupBtn');
    const backdrop = document.getElementById('mobileNavPopupBackdrop');

    function openMobileNavPopup() {
        if (!popupModal) return;
        popupModal.classList.remove('pointer-events-none');
        popupModal.classList.remove('opacity-0');
        popupModal.classList.add('opacity-100');
        if (popupPanel) {
            popupPanel.classList.remove('-translate-y-4');
            popupPanel.classList.add('translate-y-0');
        }
        document.body.classList.add('overflow-hidden');
    }

    function closeMobileNavPopup() {
        if (!popupModal) return;
        popupModal.classList.add('pointer-events-none');
        popupModal.classList.remove('opacity-100');
        popupModal.classList.add('opacity-0');
        if (popupPanel) {
            popupPanel.classList.add('-translate-y-4');
            popupPanel.classList.remove('translate-y-0');
        }
        document.body.classList.remove('overflow-hidden');
    }

    // Attach open triggers: any element with class 'mobile-nav-popup-trigger' or id 'mobileNavMenuBtn'
    document.querySelectorAll('.mobile-nav-popup-trigger, #mobileNavMenuBtn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openMobileNavPopup();
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMobileNavPopup();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', () => {
            closeMobileNavPopup();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupModal && !popupModal.classList.contains('pointer-events-none')) {
            closeMobileNavPopup();
        }
    });
});
