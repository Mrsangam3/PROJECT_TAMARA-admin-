# TAAMARA CO-LIVE SPACES — Admin PMS & Management Portal

> **Luxury Co-Living Management Application**  
> Location: Financial District, Nanakramguda, Hyderabad  
> Stack: Express.js (Node.js), Vanilla CSS & TailwindCSS, HTML5 Semantic Design System

---

## 🌟 Overview

**TAAMARA CO-LIVE SPACES Admin Portal** is an end-to-end property management system designed specifically for premium co-living operations. It combines luxury aesthetics (royal burgundy `#14070f`, champagne gold `#e2b842`, and warm cream `#faf6f0`) with an operational workflow for managing residents, rooms, financial ledgers, maintenance work orders, and biometric gate access.

---

## 🚀 Key Modules & Screens

- **Dashboard Overview (`/admin/dashboard`)**: Key metrics (occupancy, active bookings, revenue, pending dues, biometric activity).
- **Residents Directory (`/admin/residents`)**: Complete tenant roster with status, room assignments, KYC badges, and direct WhatsApp contact.
- **Rooms & Floor Management (`/admin/rooms/floor-1`, `/admin/rooms/floor-2`, `/admin/rooms/floor-3`)**: Floor-by-floor room grid, vacancy indicators, bed allocations, and room creation modal (`/admin/add-room`).
- **Finance & Ledger System (`/admin/finance`)**:
  - **Record Entry Subscreen (`/admin/record-entry`)**: Dual income/expense recording with voucher generator, audit receipts, and payment method selectors.
  - **Operating Expenses Ledger (`/admin/expenses-ledger`)**: Category breakdowns, vendor lists, and expense audit logs.
- **Maintenance & Work Orders (`/admin/maintenance`)**:
  - Live urgent work order queue (HVAC, plumbing, electrical, IT).
  - Staff assignment modal with duty technician dispatch.
  - Remote AP reboot simulation and technician calling triggers.
  - New ticket logging modal.
- **Alerts & Notifications (`/admin/notifications`, `/admin/unread-notifications`)**: Prioritized notification center with unread counters and quick actions.
- **Profile & Account (`/admin/more`, `/admin/view-edit-profile`, `/admin/logout-confirmation`)**: Super admin management, account credentials, and secure logout flow.

---

## 🎨 Design System & Brand Palette

- **Primary Background**: Royal Dark Burgundy (`#14070f` / `#1f0a18`)
- **Light Surfaces**: Warm Cream (`#faf6f0` / `#fdfbf7`) & Pearl Border (`#ede4d5`)
- **Accent Primary**: Royal Gold (`#e2b842` / `#c59b27` / `#f1d278`)
- **Typography**:
  - Headings: `Cormorant Garamond` (Editorial serif)
  - Body: `Plus Jakarta Sans`
  - Metrics / Counters / Dates: `JetBrains Mono`

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Mrsangam3/PROJECT_TAMARA-admin-.git

# Navigate to project folder
cd PROJECT_TAMARA-admin-

# Install dependencies
npm install

# Start the application
npm start
```

The portal will be live at `http://localhost:3000/admin/dashboard`.

---

## 📄 License
ISC © TAAMARA CO-LIVE SPACES
