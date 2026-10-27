// Sidebar Scroll & Smooth Navigation Controller for TAAMARA Admin Portal
document.addEventListener('DOMContentLoaded', () => {
    const desktopSidebar = document.getElementById('desktopSidebar') || document.querySelector('aside');
    if (!desktopSidebar) return;

    const scrollArea = desktopSidebar.querySelector('.custom-scrollbar') || document.getElementById('sidebarScrollArea');
    if (!scrollArea) return;

    // Ensure touch and pointer scrolling responsiveness
    scrollArea.style.touchAction = 'pan-y';

    // 1. Wheel event handler:
    // When wheeling anywhere on the sidebar (header branding, footer warden desk, or nav area),
    // ensure the scroll area scrolls smoothly and responsively.
    desktopSidebar.addEventListener('wheel', (e) => {
        if (scrollArea.scrollHeight > scrollArea.clientHeight) {
            if (!scrollArea.contains(e.target)) {
                scrollArea.scrollTop += e.deltaY;
            }
        }
    }, { passive: true });

    // 2. Ensure active nav item or floor sub-item is visible on load
    const activeItem = scrollArea.querySelector('.bg-amber-500\\/15, .bg-amber-500, [aria-current="page"]');
    if (activeItem) {
        setTimeout(() => {
            const itemRect = activeItem.getBoundingClientRect();
            const areaRect = scrollArea.getBoundingClientRect();
            if (itemRect.bottom > areaRect.bottom || itemRect.top < areaRect.top) {
                activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }, 120);
    }
});
