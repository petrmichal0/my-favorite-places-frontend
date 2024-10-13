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
- [Set up Environment Variables](#set-up-environment-variables)
- [Usage](#usage)
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

## Set up Environment Variables

To run this application, you'll need to set up several environment variables. These variables are essential for connecting to external services like Google Maps API. Follow these steps:

### 1. Create a `.env` File

In the root directory of your project, create a file named `.env` where you will store these variables.

### 2. Define the Required Environment Variables

Add the following variables to your `.env` file. Replace the placeholder values with your actual credentials.

```env
# Google Maps API Key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Replace `your_google_maps_api_key` with the actual API key obtained from Google Cloud Console.

### 3. Obtain Necessary Credentials and API Keys

#### Google Maps API Key:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the **Maps SDK for Android**, **Maps SDK for iOS**, and any other Google Maps APIs needed (e.g., **Geocoding API**, **Static Maps API**).
4. Go to "APIs & Services" → "Credentials" and create a new **API key**.
5. Restrict the API key's usage to your project if needed for security purposes.

### 4. Secure Your Environment Variables

Make sure that your `.env` file is included in your `.gitignore` file to prevent it from being pushed to a public repository. This ensures your sensitive credentials remain secure.

By following these steps, you ensure that your application is correctly configured to use the Google Maps API and securely store the necessary credentials.

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

### 1. Try the App with Expo Go

The easiest way to try the app is by using **Expo Go**. Simply download the [Expo Go](https://expo.dev/client) app on your mobile device and scan the QR code below to launch the app:

<img src="https://github.com/user-attachments/assets/7ce6f21b-e2e1-404d-886e-81f0b321a54c" alt="QR Code for Expo" width="200">

Alternatively, you can open the app directly in Snack using this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-favorite-places-v1?platform=android).

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](link-to-apk)

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

- **Expo**: Used for rapid development and easy deployment.
- **React Navigation**: Provides navigation capabilities.
- **SQLite**: Stores and manages local data.
- **Axios**: Fetches location data from Google Maps API.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
