# 📇 ProfileApp - Interactive Profile Showcase

**ProfileApp** is a sleek, cross-platform mobile application developed with **React Native (Expo)**. It serves as an interactive showcase of prominent figures in computer science and mathematics, demonstrating modern mobile UI design principles, component reusability, and touch-based interactivity.

---

## 🚀 Project Purpose

The primary goal of this project is to implement a clean, reusable, and responsive user interface. Unlike static, repetitive code structures, ProfileApp focuses on:
* **DRY (Don't Repeat Yourself) Principle:** Utilizing a singular, dynamic component to render diverse data.
* **Safe Area Handling:** Ensuring the UI adapts flawlessly to modern device constraints (like notches and home indicators) on both iOS and Android.
* **Interactive Feedback:** Providing immediate visual and functional responses to user interactions.

---

## 🛠️ Tech Stack & Architecture

This project strictly follows a **Component-Based Architecture** and utilizes the following key technologies:

### 1. Core Framework
* **React Native (Expo SDK 54):** Used for building a native-feeling mobile application for both iOS and Android platforms from a single JavaScript codebase.

### 2. UI Layout & Styling
* **Flexbox:** The primary layout engine used to align the header, scrollable content, and internal card elements efficiently.
* **Platform-Specific Styling:** * *Purpose:* To ensure the application looks native on all devices. 
    * *Logic:* The `StyleSheet` implements dual-shadow properties—using `shadowColor`, `shadowOffset`, `shadowOpacity`, and `shadowRadius` for iOS, paired with the `elevation` property for Android material design guidelines.

### 3. Component Architecture & Data Flow
* **Props-Driven Rendering (`ProfileCard.js`):** * *Purpose:* To keep the main `App.js` file clean and maintainable.
    * *Logic:* The `ProfileCard` component acts as a blueprint. It accepts dynamic `props` (`name`, `role`, `imageSource`) from the parent component and renders the specific data accordingly.

---

## 📱 Key Features

### ✅ Dynamic Component Reusability
Instead of hardcoding every single card layout, the app uses a custom `<ProfileCard />` component. This allows for infinitely scaling the list by simply passing new data as props without bloating the codebase.

### ✅ Cross-Platform Safe Area Management
By utilizing `react-native-safe-area-context`, the application intelligently detects the device's physical hardware bounds (such as the iPhone Dynamic Island or Android camera punch-holes) and prevents the header or content from overlapping with them.

### ✅ Interactive Touch Events
Every profile card is wrapped in a `TouchableOpacity` component. When a user taps on a profile, it slightly decreases in opacity (providing tactile visual feedback) and triggers a native OS `Alert` dialog identifying the selected profile.

---

## 💡 Challenges & Solutions

During the development process, several technical challenges were encountered and resolved:

### 1. Achieving Consistent UI Across OS
* **Challenge:** Drop shadows render completely differently on iOS CoreAnimation vs. Android Material Design, leading to inconsistent UI.
* **Solution:** I implemented a hybrid style approach within the `ProfileCard` component. I used the `elevation` property specifically for Android while concurrently applying standard shadow properties for iOS, achieving a unified 3D card effect across both platforms.

### 2. Handling Long Lists on Small Screens
* **Challenge:** As more profiles are added, the content exceeds the physical height of the device screen, making it inaccessible.
* **Solution:** The entire card container was wrapped in a `ScrollView`. I also applied a specific `contentContainerStyle` to ensure proper padding remains at the bottom of the scrollable area, preventing the last card from being cut off by the device bezels.

### 3. Preventing Header Overlap
* **Challenge:** On modern devices, absolute positioned items or standard views can easily slide under the status bar (battery/time indicators).
* **Solution:** Integrated `SafeAreaView` specifically configuring the `edges={['top', 'left', 'right']}` to ensure the custom "Profile Cards" header always sits perfectly below the system status bar, regardless of the device model.

---

## 📂 Project Structure

```bash
ProfileApp/
├── assets/              # Local image resources (ada.png, grace.png, etc.)
├── components/      
│   └── ProfileCard.js   # Reusable UI component for individual profiles
├── App.js               # Main entry point & ScrollView layout
├── app.json             # Expo configuration and app metadata
├── package.json
└── README.md
```
---

## 🚀 How to Set Up and Run the Project
Please follow these instructions step-by-step to set up and run the project on your local machine.

### 1. Prerequisites (Before You Start)

Ensure you have the following installed on your computer:

Node.js: (Version 18 or higher) - Download Here

Expo Go App: Install this app on your physical mobile device from the App Store (iOS) or Google Play (Android).

### 2. Installation Steps

## Step 1: Clone the Repository
Open your terminal and run:

```bash
git clone [https://github.com/berryranus/ProfileApp.git](https://github.com/berryranus/ProfileApp.git)
cd ProfileApp
```

## Step 2: Install Dependencies
Install the required packages by running:

```bash
npm install
```

### 3. Running the Application

## Step 3: Start the Development Server
Run the following command to start the Expo Metro Bundler:

```bash
npx expo start
```

## Step 4: Launch on Your Device

You will see a QR Code in your terminal.

For Android: Open the Expo Go app and scan the QR code.

For iOS: Open your default Camera App, scan the QR code, and tap the notification to open it in Expo Go.

