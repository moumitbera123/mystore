# mystore.com

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node.js-18.20.3-brightgreen)](https://nodejs.org/)
[![npm Version](https://img.shields.io/badge/npm-10.8.1-red)](https://www.npmjs.com/)

## Overview

**mystore.com** is a comprehensive e-commerce platform that allows users to seamlessly browse products, add items to their cart, and complete purchases. This project is designed for businesses aiming to establish a robust online presence and provide customers with an intuitive and efficient shopping experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- **Product Browsing:** Explore a wide range of products with detailed descriptions and images.
- **Secure Checkout:** Complete purchases securely with multiple payment options.
- **Responsive Design:** Optimized for various devices including desktops and mobile platforms.
- **API Integration:** Efficient data handling using Axios for API requests.

## Technologies Used

- **Runtime Environment:**
  - [Node.js](https://nodejs.org/en/): 18.20.3
- **Package Manager:**
  - [npm](https://www.npmjs.com/): 10.8.1
- **Java Development Kit:**
  - JDK 17.0.11.9
- **Package Management:**
  - [Chocolatey](https://chocolatey.org/): v2.3.0
- **Frontend Frameworks and Libraries:**
  - [React](https://reactjs.org/): 18.3.1
  - [React Native](https://reactnative.dev/): 0.75.1
  - [React Navigation](https://reactnavigation.org/): 
    - bottom-tabs: ^6.6.1
    - drawer: ^6.7.2
    - native: ^6.1.17
    - stack: ^6.3.29
  - [Axios](https://axios-http.com/): ^1.7.4
  - [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/): ^2.18.1
  - [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/): ^3.15.0
  - [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context): ^4.10.1
  - [React Native Screens](https://github.com/software-mansion/react-native-screens): ^3.34.0
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): ^10.1.0

## Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v18.20.3 or later)
- [npm](https://www.npmjs.com/get-npm) (v10.8.1 or later)
- [JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (v17.0.11.9 or later)
- [Chocolatey](https://chocolatey.org/install) (v2.3.0 or later)
- [Git](https://git-scm.com/downloads) (Latest version)

### Environment Setup

#### 1. Install Node.js and npm

- **Windows/MacOS/Linux:**
  - Download and install Node.js from the [official website](https://nodejs.org/en/download/).
  - Verify the installation:
  
    ```bash
    node -v
    npm -v
    ```
  - This should output the versions of Node.js and npm installed on your system.

#### 2. Install JDK

- **Windows:**
  - Download and install JDK 17 from the [Oracle website](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).
  - After installation, set the `JAVA_HOME` environment variable:
  
    ```bash
    setx JAVA_HOME "C:\Program Files\Java\jdk-17.x.x"
    setx PATH "%JAVA_HOME%\bin;%PATH%"
    ```
  
  - Verify the installation:
  
    ```bash
    java -version
    ```
  
  - This should output the version of Java installed.

- **MacOS/Linux:**
  - Install JDK via a package manager like Homebrew (MacOS) or apt (Linux), or download from Oracle.
  - Verify the installation:

    ```bash
    java -version
    ```

#### 3. Install Chocolatey (Windows Only)

- **Windows:**
  - Open a PowerShell terminal with administrator privileges.
  - Run the following command to install Chocolatey:

    ```bash
    Set-ExecutionPolicy Bypass -Scope Process -Force; `
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol `
    -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

  - Verify the installation:

    ```bash
    choco -v
    ```

#### 4. Install Git

- **Windows/MacOS/Linux:**
  - Download and install Git from the [official website](https://git-scm.com/downloads).
  - Verify the installation:

    ```bash
    git --version
    ```

### Steps

1. **Clone the Repository**

   - Open a terminal and run the following command to clone the project repository:

     ```bash
     git clone https://github.com/moumitbera123/mystore.git
     cd mystore
     ```

2. **Install Project Dependencies**

   - Run the following command to install all necessary npm packages:

     ```bash
     npm install
     ```

   - This will download and install all dependencies listed in the `package.json` file.

3. **Setup Android Environment**

   - **Android Studio Setup:**
     - Download and install Android Studio from [here](https://developer.android.com/studio).
     - Open Android Studio and install necessary SDKs and tools.
     - Configure your system's PATH environment variable to include the Android SDK tools.
  
   - **Set Up Environment Variables (Windows):**
  
     ```bash
     setx ANDROID_HOME "C:\Users\<Your-Username>\AppData\Local\Android\Sdk"
     setx PATH "%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%PATH%"
     ```

   - **macOS/Linux:**
     - Similar setup steps as Windows, but the Android SDK path might differ.
     - For example:

       ```bash
       export ANDROID_HOME=$HOME/Library/Android/sdk
       export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
       ```

4. **Run the Project**

   - **Start the Metro Bundler:**

     ```bash
     npm start
     ```

   - **Build and Run the Android App:**

     - Ensure you have an Android emulator running or a physical device connected, then execute:

       ```bash
       npm run android
       ```

   - **Optional: Build and Run the iOS App (macOS Only):**

     ```bash
     npx react-native run-ios
     ```

     **Note:** You need Xcode installed to run the iOS version.

5. **Troubleshooting**

   - **Metro Bundler Issues:**
     - Make sure no other instance of Metro Bundler is running. You can terminate it by using `Ctrl + C` in the terminal where it's running.

   - **Build Failures:**
     - Ensure all dependencies and environment variables are correctly set up. For Android, make sure the SDK path is correct and the necessary SDK components are installed.

   - **Dependency Issues:**
     - If you encounter problems with installed dependencies, try removing the `node_modules` folder and `package-lock.json` file, then reinstalling the dependencies:

       ```bash
       rm -rf node_modules package-lock.json
       npm install
       ```

