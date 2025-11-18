# App Store / Play Store Clone

A **React-based App Store / Play Store clone** that displays app listings, top apps, detailed app info with reviews, and installation management using **localStorage**.
This project follows a **Figma design** and includes responsive layouts, search functionality, charts using Recharts, toast notifications, and custom error/loading pages.

---

## 🌐 Live Link
Check out the **live version** of the project here:  
[**Customer Support Zone - Live Demo**]( https://bd-app-store.netlify.app/)

## 📌 Main Features

### 🥡 Layout & Data Design

#### Header

* Logo navigates to **Home Page**
* Navigation bar with links: [Home, Apps, Installation]
* Active route indication
* **Contribution** button linking to your GitHub profile

#### Footer

* Custom footer designed creatively

#### App Data

* JSON array of 12–20 objects with structure:

```json
{
  "id": 1,
  "title": "App Name",
  "companyName": "Company Name",
  "image": "image-url",
  "description": "App description",
  "size": 120,
  "reviews": 500,
  "ratingAvg": 4.5,
  "downloads": 10000,
  "ratings": [
    { "name": "1 star", "count": 10 },
    { "name": "2 star", "count": 20 },
    { "name": "3 star", "count": 50 },
    { "name": "4 star", "count": 200 },
    { "name": "5 star", "count": 220 }
  ]
}
```

---

### 🏠 Home Page

#### Banner

* Center-aligned heading, text, and two buttons

  * **App Store:** Redirects to App Store
  * **Play Store:** Redirects to Play Store

#### States Section

* Three state cards following Figma design

#### Top Apps Section

* Displays **8 apps** in a **4-column layout**
* Each app card includes: title, image, download count, average rating
* Clicking navigates to **App Details page**
* **Show All** button navigates to **All Apps page**

---

### 📱 All Apps Page

#### Title Section

* Page title and subtitle matching Figma design

#### Search & States

* Display total number of apps on left
* Search bar on right
* **Live search:** filters apps by title (case-insensitive)
* Displays **“No App Found”** if no matches

#### App Section

* Displays all apps from JSON data
* Each app card shows title, image, downloads, and rating
* Clicking navigates to **App Details page**

---

### 📊 App Details Page

#### App Information

* App image on left
* Displays title, rating, downloads, reviews
* **Install button:**

  * Click → Disabled and text changes to **Installed**
  * Shows **Success Toast**

#### App Review Chart

* Responsive chart using **Recharts**
* Visualizes review data from JSON

#### App Description

* Displays description according to Figma layout

---

### ⚠️ Error Page & Others

* Custom **Error Page** for invalid routes
* Loading animation during page navigation and search operations
* Relevant **Not Found message** when app is not found
* Reloading any route works after deployment

---

### 🚀 Challenge / Advanced Features

#### LocalStorage Features

##### App Installation

* Clicking **Install** saves the app to **localStorage**
* Already installed apps show disabled button with **Installed**

##### My Installation Page

* Displays installed apps as cards
* **Uninstall button:**

  * Removes app from UI and localStorage
  * Shows toast notification

#### Sort by Downloads

* Dropdown to sort apps by download count:

  * **High → Low**
  * **Low → High**

#### Loading Animations

* Show loading during page navigation and search operations

---

## 🌐 Live Link

Check out the **live version** of the project here:
[**App Store Clone - Live Demo**](https://example.com)

---

## 📝 Technical Concepts / Notes

### JSON Data Structure

* Each app object contains image, title, companyName, id, description, size, reviews, ratingAvg, downloads, and ratings array

### React Features Used

* Components & Props
* State management via `useState` and `useEffect`
* React Router for routing
* Event handling for buttons
* LocalStorage for persistence
* Recharts for data visualization
* React-Toastify for toast notifications

---

## ⚙️ Dependencies

* React.js
* React Router DOM
* Recharts
* React-Toastify
* TailwindCSS / Custom CSS

---

## 💻 Local Setup / How to Run

1. Clone the repository:

```bash
git clone https://github.com/username/app-store-clone.git
```

2. Navigate to the project directory:

```bash
cd app-store-clone
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open in browser:

```text
http://localhost:3000
```

---

## 🎯 Technology Stack / Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![React-Toastify](https://img.shields.io/badge/React--Toastify-FF6347?style=for-the-badge\&logo=react\&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6347?style=for-the-badge\&logo=react\&logoColor=white)
