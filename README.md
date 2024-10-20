# My Favorite Places Frontend

## Project Title and Description
My Favorite Places Frontend is a React Native application that allows users to explore and manage their favorite locations with an easy-to-use interface. The app provides features like adding new places, viewing details, location picking on a map, and storing images.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/3aacf781-597f-443c-999e-884cc86da003" width="250" alt="My Favorite Places App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation (for Development)](#installation-for-development)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Demo (for End Users)](#demo-for-end-users)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add and manage favorite places with photos.
- View place details, including location and address.
- Pick locations on a map or get the user's current location.
- Display favorite places in a list.
- Responsive UI for Android.

## Installation (for Development)

> **Note:** This section is intended for developers who want to run the app locally on their development environment (e.g., Visual Studio Code).

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Expo CLI**: v6.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/my-favorite-places-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd my-favorite-places-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Starting the Development Server
To start the development server, run:
```bash
npm start
```

### 2. Running the App on a Device

To run the app on a simulator or physical device:

- For Android:
    ```bash
    npm run android
    ```

## Backend Information

The backend for this project is hosted at the following URL:

- **Backend API:** [https://my-favorite-places-backend-2c1cd3b2e4af.herokuapp.com/](https://my-favorite-places-backend-2c1cd3b2e4af.herokuapp.com/)

The source code for the backend is available on GitHub:

- **Backend Repository:** [https://github.com/petrmichal0/my-favorite-places-backend](https://github.com/petrmichal0/my-favorite-places-backend)

All API endpoints and detailed documentation on how to interact with the backend are provided in the backend repository. If you want to see the available API requests and how to use them, please visit the backend repository's README or relevant documentation files.

## Screenshots

<table>
  <tr>
    <th>All Places Screen</th>
    <th>Place Details</th>
    <th>Add Place</th>
    <th>Pick a Location</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/434527d2-f0d9-47c0-a288-7298bb50a67d" target="_blank">
    <img src="https://github.com/user-attachments/assets/434527d2-f0d9-47c0-a288-7298bb50a67d" width="130" height="300" alt="All Places Screen">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/3199ab21-d16e-465a-9ec7-eac7d1dc57ad" target="_blank">
    <img src="https://github.com/user-attachments/assets/3199ab21-d16e-465a-9ec7-eac7d1dc57ad" width="130" height="300" alt="Place Details">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/88f0720b-cdf1-4983-92dc-4946c3b4d969" target="_blank">
    <img src="https://github.com/user-attachments/assets/88f0720b-cdf1-4983-92dc-4946c3b4d969" width="130" height="300" alt="Add Place">
  </a>
</td>
<td style="border: 1px solid black;">
  <a href="https://github.com/user-attachments/assets/25df58d8-428c-4aad-8bf5-a868e84ae620" target="_blank">
    <img src="https://github.com/user-attachments/assets/25df58d8-428c-4aad-8bf5-a868e84ae620" width="130" height="300" alt="Pick a Location">
  </a>
</td>
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go or Web Preview
You have two options to try the app:

1. **Web Preview (Launch Snack)**:
   - Simply click this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-favorite-places-frontend?platform=android).
   - The page will open with the **Android** tab selected.
   - Click the **Launch Snack** button to instantly run the app in the web-based Expo Snack environment.

2. **Expo Go on Your Mobile Device**:
   - Download the [Expo Go](https://expo.dev/client) app on your mobile device.
   - Open the Snack link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-favorite-places-frontend?platform=android).
   - Select the **My Device** tab.
   - Scan the QR code with the **Expo Go** app on your mobile device to launch the app on your phone.

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](https://1drv.ms/u/s!Atg7bg8FYV5vpMlIHZxs8DRrLR2Ubg?e=CsiZ8N)

## Project Structure

```css
My Favorite Places Frontend/
├── assets/
│   ├── adaptive-icon.png
│   ├── icon.png
│   ├── splash.png
├── components/
│   ├── Places/
│   │   ├── ImagePicker.tsx
│   │   ├── LocationPicker.tsx
│   │   ├── PlaceForm.tsx
│   │   ├── PlaceItem.tsx
│   │   ├── PlacesList.tsx
│   │   ├── ui/
│   │       ├── Button.tsx
│   │       ├── IconButton.tsx
│   │       ├── OutlinedButton.tsx
├── constants/
│   ├── colors.ts
├── models/
│   ├── place.ts
├── screens/
│   ├── AddPlace.tsx
│   ├── AllPlaces.tsx
│   ├── Map.tsx
│   ├── PlaceDetails.tsx
├── util/
│   ├── database.js
│   ├── location.ts
├── .env
├── App.tsx
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── .gitignore
```

## Technologies Used

[![React Native Badge](https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DAFB)](#)
[![Expo Badge](https://img.shields.io/badge/-Expo-000020?style=for-the-badge&labelColor=black&logo=expo&logoColor=white)](#)

## Third-Party Libraries

- **Expo Vector Icons**: A library that provides a set of customizable icons for use in Expo and React Native projects.
- **React Navigation**: A library for handling navigation in React Native apps.
- **React Navigation Native Stack**: Provides stack navigation for React Native applications, a part of the React Navigation library.
- **Axios**: A library for making HTTP requests, simplifying API calls.
- **Expo Image Picker**: Allows users to select images from their device’s library or take photos with the camera.
- **Expo Location**: Provides access to the device's location information.
- **Expo SQLite**: Enables the use of a SQLite database within an Expo project.
- **Expo Status Bar**: A component that provides status bar configuration and control in Expo projects.
- **React Native Maps**: A library for rendering and using maps in React Native apps with support for Google Maps and Apple Maps.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
