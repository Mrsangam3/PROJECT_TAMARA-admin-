const fs = require('fs');
const path = require('path');

function getUnifiedSidebar(activeKey, activeSubKey = null) {
    const isDashboard = activeKey === 'dashboard';
    const isTenants = activeKey === 'tenants';
    const isRooms = activeKey === 'rooms';
    const isFinance = activeKey === 'finance';
    const isMore = activeKey === 'more';
    const isNotifications = activeKey === 'notifications';
    const isAssignBed = activeKey === 'assign-bed';
    const isNewCheckins = activeKey === 'new-checkins';
    const isPendingDues = activeKey === 'pending-dues';
    const isPaidTenants = activeKey === 'paid-tenants';
    const isMaintenance = activeKey === 'maintenance';

    return `<!-- DESKTOP SIDEBAR -->
    <aside id="desktopSidebar" class="fixed inset-y-0 left-0 w-64 bg-[#14070f] text-[#faf6f0] z-40 hidden lg:flex flex-col border-r border-[#3d1630] h-screen overflow-hidden">
        <!-- Sidebar Header / Branding (Fixed) -->
        <div class="p-6 border-b border-[#3d1630] flex-shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e2b842] to-[#c59b27] flex items-center justify-center text-[#14070f] font-serif font-black text-xl shadow-md shadow-[#e2b842]/20">
                    T
                </div>
                <div>
                    <h1 class="text-base font-serif font-bold tracking-tight text-[#faf6f0] leading-tight">TAAMARA CO-LIVE</h1>
                    <p class="text-[10px] text-[#e2b842] font-bold uppercase tracking-wider">Nanakramguda, Hyd</p>
                </div>
            </div>
            <div class="mt-4 flex items-center justify-between bg-[#1f0a18] border border-[#3d1630] px-3 py-2 rounded-xl text-xs">
                <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span class="text-[#ede4d5] font-medium text-[11px]">Biometric Gate Live</span>
                </div>
                <a href="/" target="_blank" class="text-[#e2b842] hover:text-[#f1d278] text-[11px] font-bold">Website ↗</a>
            </div>
        </div>

        <!-- Scrollable Navigation Links -->
        <div id="sidebarScrollArea" class="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
            <nav class="p-4 space-y-6 text-xs">
                <div>
                    <p class="px-3 text-[10px] font-bold uppercase tracking-wider text-[#a0909c] mb-2">Management</p>
                    <div class="space-y-1">
                        <!-- Dashboard Overview -->
                        <a href="/admin/dashboard" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition ${isDashboard ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <svg class="w-4 h-4 ${isDashboard ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                            <span>Dashboard Overview</span>
                        </a>

                        <!-- Residents Directory -->
                        <a href="/admin/residents" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isTenants ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <svg class="w-4 h-4 ${isTenants ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                <span>Residents Directory</span>
                            </div>
                            <span class="bg-[#2a0e21] text-[#ede4d5] text-[10px] px-2 py-0.5 rounded-md font-semibold border border-[#3d1630]">68</span>
                        </a>

                        <!-- Rooms & Sharing Group -->
                        <div class="space-y-1">
                            <a href="/admin/rooms/floor-1" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isRooms ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                                <div class="flex items-center gap-3">
                                    <svg class="w-4 h-4 ${isRooms ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                                    <span>Rooms & Sharing</span>
                                </div>
                                <span class="bg-emerald-950/80 text-emerald-400 text-[10px] px-2 py-0.5 rounded-md font-bold border border-emerald-800/40">7 Beds Free</span>
                            </a>
                            <div class="pl-7 pr-2 py-1 space-y-1">
                                <a href="/admin/rooms/floor-1" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'floor-1' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Floor 1 (Ground)</span>
                                    <span class="text-[9px] bg-[#2a0e21] text-[#f1d278] px-1.5 py-0.2 rounded border border-[#3d1630]">86%</span>
                                </a>
                                <a href="/admin/rooms/floor-2" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'floor-2' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Floor 2 (Premium)</span>
                                    <span class="text-[9px] bg-emerald-950/60 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-800/40">5 Free</span>
                                </a>
                                <a href="/admin/rooms/floor-3" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'floor-3' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Floor 3 (Penthouse)</span>
                                    <span class="text-[9px] bg-teal-950/60 text-teal-300 px-1.5 py-0.2 rounded border border-teal-800/40">7 Free</span>
                                </a>
                                <a href="/admin/add-room" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'add-room' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#e2b842] hover:text-[#f1d278] hover:bg-[#1f0a18]'}">
                                    <span>+ Add New Room</span>
                                </a>
                            </div>
                        </div>

                        <!-- Finance & Ledger Group -->
                        <div class="space-y-1">
                            <a href="/admin/finance" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isFinance ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                                <div class="flex items-center gap-3">
                                    <svg class="w-4 h-4 ${isFinance ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    <span>Finance & Ledger</span>
                                </div>
                                <span class="bg-[#2a0e21] text-[#e2b842] text-[10px] px-2 py-0.5 rounded-md font-bold border border-[#3d1630]">₹6.85L</span>
                            </a>
                            <div class="pl-7 pr-2 py-1 space-y-1">
                                <a href="/admin/record-entry" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'record-entry' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Record Entry</span>
                                </a>
                                <a href="/admin/expenses-ledger" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'expenses' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Expenses Ledger</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="px-3 text-[10px] font-bold uppercase tracking-wider text-[#a0909c] mb-2">Operations</p>
                    <div class="space-y-1">
                        <a href="/admin/assign-bed" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition ${isAssignBed ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                            <span>Assign Bed (Check-In)</span>
                        </a>

                        <a href="/admin/new-checkins" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isNewCheckins ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <svg class="w-4 h-4 text-[#e2b842]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
                                <span>New Check-ins</span>
                            </div>
                            <span class="text-[10px] bg-[#2a0e21] text-[#f1d278] font-bold px-2 py-0.5 rounded border border-[#3d1630]">3 Pending</span>
                        </a>

                        <a href="/admin/pending-dues" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isPendingDues ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-red-400"></span>
                                <span>Pending Dues</span>
                            </div>
                            <span class="bg-red-950/80 text-red-300 text-[10px] px-2 py-0.5 rounded-md font-bold border border-red-800/40">₹42.5K</span>
                        </a>

                        <a href="/admin/paid-tenants" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isPaidTenants ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>Settled Receipts</span>
                            </div>
                            <span class="text-[10px] text-[#a0909c]">64 Paid</span>
                        </a>

                        <!-- Maintenance Requests -->
                        <a href="/admin/maintenance" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isMaintenance ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <svg class="w-4 h-4 ${isMaintenance ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                <span>Maintenance Requests</span>
                            </div>
                            <span class="text-[10px] ${isMaintenance ? 'bg-red-500 text-white font-black' : 'bg-red-500/20 text-red-300 font-bold'} px-2 py-0.5 rounded-full border border-red-500/30">5 Active</span>
                        </a>

                        <!-- Notifications -->
                        <a href="/admin/notifications" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isNotifications ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                            <div class="flex items-center gap-3">
                                <svg class="w-4 h-4 ${isNotifications ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                                <span>Notifications</span>
                            </div>
                            <span class="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.2 rounded-full">4</span>
                        </a>

                        <!-- More & Profile Group -->
                        <div class="space-y-1">
                            <a href="/admin/more" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium transition ${isMore ? 'bg-[#e2b842]/15 text-[#f1d278] border border-[#e2b842]/30 font-bold shadow-xs' : 'text-[#beb5a7] hover:bg-[#1f0a18] hover:text-[#faf6f0]'}">
                                <div class="flex items-center gap-3">
                                    <svg class="w-4 h-4 ${isMore ? 'text-[#e2b842]' : 'text-[#a0909c]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    <span>More & Profile</span>
                                </div>
                            </a>
                            <div class="pl-7 pr-2 py-1 space-y-1">
                                <a href="/admin/view-edit-profile" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'edit-profile' ? 'text-[#f1d278] bg-[#2a0e21] font-bold' : 'text-[#a0909c] hover:text-[#faf6f0] hover:bg-[#1f0a18]'}">
                                    <span>↳ Edit Profile</span>
                                    ${activeSubKey === 'edit-profile' ? '<span class="text-[8px] bg-[#e2b842] text-[#14070f] font-black px-1.5 py-0.2 rounded">Now</span>' : ''}
                                </a>
                                <a href="/admin/logout-confirmation" class="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubKey === 'logout-confirmation' ? 'text-red-400 bg-red-950/40 font-bold border border-red-800/40' : 'text-[#a0909c] hover:text-red-300 hover:bg-[#1f0a18]'}">
                                    <span>↳ Logout Confirmation</span>
                                    ${activeSubKey === 'logout-confirmation' ? '<span class="text-[8px] bg-red-500 text-white font-black px-1.5 py-0.2 rounded">Now</span>' : ''}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Fixed Bottom Bar -->
        <div class="p-4 border-t border-[#3d1630] bg-[#14070f]/95 flex-shrink-0">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-9 h-9 rounded-xl bg-[#e2b842]/20 text-[#f1d278] flex items-center justify-center font-bold text-sm border border-[#e2b842]/30">AM</div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-[#faf6f0] truncate">Alex Morgan</p>
                    <p class="text-[10px] text-[#a0909c] truncate">Super Admin • Sunrise</p>
                </div>
                <a href="/admin/logout-confirmation" class="text-[#a0909c] hover:text-red-400 p-1.5 transition" title="Logout">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                </a>
            </div>
            <p class="text-[10px] text-[#6e5d68] text-center">TAAMARA HavenHostel v2.4.1</p>
        </div>
    </aside>`;
}

function getUnifiedMobileBottomNav(activeKey) {
    const isDashboard = activeKey === 'dashboard';
    const isTenants = activeKey === 'tenants';
    const isRooms = activeKey === 'rooms';
    const isFinance = activeKey === 'finance';
    const isMore = activeKey === 'more';

    return `<!-- MOBILE BOTTOM NAVIGATION BAR -->
    <nav class="lg:hidden fixed bottom-0 inset-x-0 bg-[#faf6f0]/95 backdrop-blur-md border-t border-[#ede4d5] z-40 px-3 py-2 flex items-center justify-around text-[10px] font-semibold text-[#6e5d68] shadow-lg">
        <a href="/admin/dashboard" class="flex flex-col items-center gap-1 transition ${isDashboard ? 'text-[#c59b27] font-bold' : 'hover:text-[#1a1016]'}">
            <svg class="w-5 h-5 ${isDashboard ? 'text-[#c59b27]' : 'text-[#6e5d68]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${isDashboard ? '2.5' : '2'}" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <span>Home</span>
        </a>
        <a href="/admin/tenants" class="flex flex-col items-center gap-1 transition ${isTenants ? 'text-[#c59b27] font-bold' : 'hover:text-[#1a1016]'}">
            <svg class="w-5 h-5 ${isTenants ? 'text-[#c59b27]' : 'text-[#6e5d68]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${isTenants ? '2.5' : '2'}" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <span>Tenants</span>
        </a>
        <a href="/admin/rooms/floor-1" class="flex flex-col items-center gap-1 transition ${isRooms ? 'text-[#c59b27] font-bold' : 'hover:text-[#1a1016]'}">
            <svg class="w-5 h-5 ${isRooms ? 'text-[#c59b27]' : 'text-[#6e5d68]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${isRooms ? '2.5' : '2'}" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            <span>Rooms</span>
        </a>
        <a href="/admin/finance" class="flex flex-col items-center gap-1 transition ${isFinance ? 'text-[#c59b27] font-bold' : 'hover:text-[#1a1016]'}">
            <svg class="w-5 h-5 ${isFinance ? 'text-[#c59b27]' : 'text-[#6e5d68]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${isFinance ? '2.5' : '2'}" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Finance</span>
        </a>
        <a href="/admin/more" class="flex flex-col items-center gap-1 transition ${isMore ? 'text-[#c59b27] font-bold' : 'hover:text-[#1a1016]'}">
            <svg class="w-5 h-5 ${isMore ? 'text-[#c59b27]' : 'text-[#6e5d68]'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="${isMore ? '2.5' : '2'}" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <span>More</span>
        </a>
    </nav>`;
}

module.exports = { getUnifiedSidebar, getUnifiedMobileBottomNav };
