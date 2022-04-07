# 浪 Live Demo Application

Author: Benjamin Cai 蔡子豪

Live Demo: https://benjamincai-langlive-lottery-app.netlify.app/

## How to download and run application:

1. Download files from github
2. From within the folder, run npm install
3. Run npm start

## Depository Walkthrough

### src

Folders in src include:

- index.js: entrypoint for the app. Redux is setup here, wrapping the App in a Provider.
- App.js: homepage for the application. This file Composes the base components of the app.
- components: contain the view and model React components used in the app
- helpers: contains helper functions used for formatting and independent functions.
- redux: supplementary files for Redux setup. Note that the reducers, actions and type files are not included here. This project uses a features based Redux architecture where the redux files are found in a state folder alongside each component.
- resources: contains the images

### components

Components include:

- TimerInput: handles the input of hours, minutes and seconds
- Stopwatch: handles the countdown and start/reset functionality
- Users: handles generation and render of users
- Picker: handles choosing random winner
- UserCard: handles presentation of winning user
