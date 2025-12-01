---
description: How to deploy to Vercel and setup Firebase
---

# Firebase Setup

1.  **Create a Firebase Project:**
    *   Go to [Firebase Console](https://console.firebase.google.com/).
    *   Click "Add project" and follow the steps.

2.  **Enable Authentication:**
    *   Go to "Build" > "Authentication" > "Get Started".
    *   Enable "Email/Password" provider.
    *   Go to "Users" tab and "Add user" to create an admin account (e.g., `admin@example.com`).

3.  **Enable Firestore Database:**
    *   Go to "Build" > "Firestore Database" > "Create database".
    *   Start in **Production mode** (or Test mode, but update rules later).
    *   Choose a location.

4.  **Create Initial Data:**
    *   In Firestore, start a collection named `metadata`.
    *   Add a document with ID `curriculum`.
    *   Copy the JSON content of your curriculum (you can find the structure in the previous `App.jsx` or use the Admin Dashboard to paste it once logged in).
    *   *Tip:* You might need to temporarily allow read/write in Firestore Rules to seed data if you haven't set up the admin user role yet.

5.  **Set User Roles:**
    *   Create a collection named `users`.
    *   Add a document where the ID is the **UID** of the admin user you created in step 2.
    *   Add a field `role` with value `admin`.

6.  **Get Configuration:**
    *   Go to Project Settings (gear icon).
    *   Scroll to "Your apps" and click the Web icon (`</>`).
    *   Register app (e.g., "cse-curriculum").
    *   Copy the `firebaseConfig` values.

# Environment Variables

Create a `.env` file in the root of your project (local) and add these variables with your Firebase config values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

# Vercel Deployment

1.  **Push to GitHub:**
    *   Ensure your latest code is pushed to GitHub.

2.  **Import to Vercel:**
    *   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click "Add New..." > "Project".
    *   Import your `cse-curriculum-testing` repository.

3.  **Configure Environment Variables:**
    *   In the Vercel project setup, expand "Environment Variables".
    *   Add all the `VITE_FIREBASE_...` variables from your `.env` file.

4.  **Deploy:**
    *   Click "Deploy".
    *   Vercel will build and deploy your site.

# Firestore Rules (Security)

Go to Firestore > Rules and update them to secure your data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /metadata/curriculum {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
