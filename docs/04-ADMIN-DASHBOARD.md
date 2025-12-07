# Admin Dashboard Guide

## Overview

The Natours Admin Dashboard provides a comprehensive management interface for platform administrators. It allows complete oversight and control over Tours, Users, Reviews, and Bookings through an intuitive web interface.

## Access Requirements

- **Role**: Admin
- **Authentication**: Must be logged in with a user account that has `role: 'admin'`

## Features

### 1. Manage Tours (`/manage-tours`)

View and manage all tours in the system.

**Displayed Information:**

- Tour Name
- Price
- Max Group Size
- Average Rating

**Actions:**

- **Delete**: Remove tours from the system (confirmation required)

### 2. Manage Users (`/manage-users`)

Oversee all registered users.

**Displayed Information:**

- User Name
- Email Address
- Role (user, guide, lead-guide, admin)
- Status (Active/Inactive)

**Actions:**

- **Delete**: Remove user accounts (careful: irreversible)

### 3. Manage Reviews (`/manage-reviews`)

Moderate tour reviews.

**Displayed Information:**

- Reviewer Name
- Tour Name
- Rating (1-5 stars)
- Review Text (truncated)

**Actions:**

- **Delete**: Remove inappropriate or spam reviews

### 4. Manage Bookings (`/manage-bookings`)

Track all tour bookings.

**Displayed Information:**

- User Name
- Tour Name
- Price Paid
- Booking Date

**Actions:**

- **Delete**: Cancel/remove bookings

## User Interface

### Navigation

Access the admin dashboard through:

1. Log in as an admin user
2. Click on your profile (top-right)
3. Navigate to "My Account"
4. Scroll to the "Admin" section in the sidebar
5. Click any "Manage" option

### Design Features

- **Modern Table Layout**: Clean, white cards with rounded corners
- **Gradient Headers**: Green gradient matching site theme
- **Readable Text**: 1.6rem font size for comfortable reading
- **Generous Spacing**: 2rem padding for better visual hierarchy
- **Smooth Interactions**: Hover effects with subtle lift and shadow
- **Responsive Buttons**: Red delete buttons with hover effects

## Technical Implementation

### Routes

All admin routes are protected with middleware:

```javascript
authController.protect + authController.restrictTo('admin');
```

### Client-Side

- **File**: `public/js/admin.js`
- **Functionality**: AJAX delete operations
- **User Feedback**: Success/error alerts with auto-reload

### Styling

- **File**: `public/css/style.css`
- **Classes**: `.table`, `.btn--tiny`, `.btn--red`

## Security

- **Role-Based Access Control (RBAC)**: Only admin users can access these routes
- **JWT Verification**: All routes require valid authentication
- **Protected Routes**: Non-admin users receive 403 Forbidden errors

## API Endpoints Used

The dashboard uses existing API endpoints:

- `DELETE /api/v1/tours/:id`
- `DELETE /api/v1/users/:id`
- `DELETE /api/v1/reviews/:id`
- `DELETE /api/v1/bookings/:id`

All endpoints are protected by the same admin role requirement.

---

_For developer documentation, see [Architecture Guide](02-ARCHITECTURE.md)_
