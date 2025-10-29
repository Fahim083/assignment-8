###  BD APP STORE
## Description
Hero IO is a responsive web application that simulates an app store experience. Users can browse a collection of apps, view detailed information, search for specific apps, sort by downloads, and manage installations using localStorage. The app features a clean, intuitive interface with navigation between home, apps, and installation pages, along with interactive elements like charts for app reviews and toast notifications for user actions.

This project is built as part of Assignment 008, focusing on modern web development practices, including responsiveness, state management, and deployment.

### Features
# Core Functionality
 - Responsive Design: Optimized for all devices (mobile, tablet, desktop).
 - Navigation: Header with logo, navigation links (Home, Apps, Installation), and active route
 - indication. Footer with custom design.
 - Home Page: Banner with call-to-action buttons, stats section, and top apps display.
 - All Apps Page: Search functionality (live, case-insensitive), app cards, and sorting by downloads.
 - App Details Page: Detailed view with app info, install button, review chart (using Recharts), and description.
 - Error Handling: Custom 404 page for invalid routes, "No App Found" messages, and loading animations.
 - LocalStorage Integration: Save and manage installed apps, with uninstall functionality.
 - Deployment Ready: Configured for seamless deployment on Cloudflare, Netlify, or Vercel, with no 404 errors on reload.
 ### Challenge Features
 - App Installation: Install apps via button click, with state persistence in localStorage and toast notifications.
 - My Installation Page: View and uninstall installed apps.
 - Sorting: Dropdown to sort apps by download count (High-Low or Low-High).
 - Loading Animations: Display during page navigation and search operations.
### Technologies Used
 - Frontend Framework: React (for component-based architecture and state management)
 - Routing: React Router (for navigation between pages)
 - Charts: Recharts (for visualizing app review data)
 - Styling: CSS (with responsive design principles; optionally Tailwind CSS or Bootstrap for utility classes)
 - Data Storage: LocalStorage (for persisting installed apps)
 - Build Tool: Vite or Create React App (for development and bundling)
 - Deployment: Cloudflare Pages, Netlify, or Vercel
 - Version Control: Git (with at least 5 meaningful commits)

### Usage
 - Home Page: Explore the banner, stats, and top apps. Click "Show All" to view all apps.
 - All Apps Page: Use the search bar to filter apps. Sort by downloads using the dropdown.
 - App Details Page: View app info, install/uninstall apps, and check the review chart.
 - My Installation Page: Manage your installed apps.
 - Navigation: Use the header links or logo to navigate. Invalid routes show a custom error page.
### Deployment
The app is deployed on Netlify . Visit the live site:
 > [Live Demo](bd-app-store.netlify.app)