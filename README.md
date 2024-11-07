# Travel Tips & Destination Guides 🌍

## Overview

The **Travel Tips & Destination Guides** platform connects travel enthusiasts, enabling users to share personal travel stories, exchange tips, and interact with fellow travelers. It offers user authentication, content sharing, premium access features, and robust social engagement functionalities. The platform empowers users to discover destinations, plan adventures, and create memorable travel experiences.

---

## Features

### User Roles:

- **User**: Can register, post, upvote/downvote, and access premium content (if verified).
- **Admin**: Manages users, content, and platform activities.

### Core Features:

1. **User Authentication**:

   - Secure login and registration with JWT.
   - Password recovery and management.
   - No complex password requirements.

2. **User Profile Management**:

   - Update profile with pictures.
   - View personal posts, followers, and following.
   - Profile verification through payment integration (Aamarpay/Stripe).
   - Verified badge display.

3. **Post Creation & Sharing**:

   - Rich Text Editor for creating travel guides.
   - Attach images to posts.
   - Categorization of posts by topics.
   - Edit/Delete posts.
   - Premium content tagging.

4. **Upvote & Downvote System**:

   - Sort posts by popularity.

5. **Commenting System**:

   - Comment, edit, and delete functionality.
   - (Optional) Comment reply system.

6. **News Feed**:

   - Dynamic feed with infinite scrolling.
   - Filter, search, and sort options.

7. **Following System**:

   - Follow/unfollow other users.

8. **Payment Integration**:

   - Payment for profile verification and premium content access via Aamarpay/Stripe.

9. **Admin Dashboard**:

   - Visual data on payments, users, and posts.

10. **Micro Animations**:
    - Smooth transitions and hover effects.

---

## Pages

1. **Login/Registration Page**: User authentication.
2. **User Dashboard**: Displays personal content and stats.
3. **Admin Dashboard**: Manage users, payments, and posts.
4. **Profile Page**: User’s travel posts and profile details.
5. **News Feed**: Community travel posts.
6. **Post Details Page**: Individual post view with comments.
7. **About Us Page**: Platform’s mission and team details.
8. **Contact Us Page**: User inquiries and support.

---

## Technology Stack

### Frontend:

- **React.js** with **TypeScript**
- **Tailwind CSS** for responsive and modern UI
- **Rich Text Editor**: Quill.js, Draft.js, or TinyMCE

### Backend:

- **Node.js** with **Express.js**
- **MongoDB** for data storage
- **JWT** for secure authentication

### Payment Integration:

- **Aamarpay** or **Stripe**

---

## Installation

### Prerequisites:

- Node.js & npm installed
- MongoDB instance running

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ekramul28/Travel-Tips-Destination-Guides-client

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Set up environment variables::
   ```bash
   # NEXT_PUBLIC_BASE_API=your api
   ```
