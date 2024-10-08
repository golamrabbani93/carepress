# CarePress - Pet Care Tips & Stories

## Project Overview

"CarePress" is a frontend web application that provides practical pet care tips and inspiring
stories for pet owners. The platform allows users to share and explore tips on nutrition, grooming,
exercise, and more, as well as stories about the bond between pets and their owners. Users can
engage by upvoting, commenting, and following others, with access to premium content through payment
integration.

## Features

- **User Authentication**:

  - Register/Login with JWT-based authentication.
  - Password recovery and reset functionality.

- **User Profiles**:

  - Manage personal profiles, view user-specific posts, and follow/unfollow others.

- **Content Creation**:

  - Create and edit pet care tips and stories using a rich text editor.
  - Categorize posts as either "Tip" or "Story."
  - Attach images to posts for enhanced engagement.

- **Voting and Comments**:

  - Upvote/downvote posts.
  - Comment on and reply to posts, with the ability to edit or delete comments.

- **Premium Content**:

  - Stripe payment integration for accessing premium content.

- **News Feed**:

  - Infinite scrolling news feed with real-time content updates.
  - Advanced search and filter functionality based on categories and keywords.

- **Responsive Design**:
  - Fully responsive, adapting to different screen sizes.

## Technology Stack

- **Framework**: Next.js 14
- **Programming Language**: TypeScript
- **CSS Framework**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Rich Text Editor**: TipTap
- **UI Components**: NextUI (Avatar, Button, Modal, etc.)
- **Payment Integration**: Stripe
- **HTTP Requests**: Axios
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query
- **Miscellaneous**: JWT Decode, clsx, date-fns, LightGallery, Intersection Observer

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/carepress.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd carepress
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Running the Application

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```bash
├── components          # Reusable UI components
├── pages               # Next.js pages (routes)
├── public              # Static files (images, fonts)
├── styles              # Global and component-specific styles (Tailwind CSS)
├── utils               # Utility functions (helper functions, axios, etc.)
└── .env.example        # Example environment variables for the project
```
