# 浪 Live Demo Application

Author: Benjamin Cai 蔡子豪

Live Demo: https://benjamincai-langlive-lottery-app.netlify.app/

## How to download and run application:

1. Download and extract zip from github
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

#### Code review to-do:

- [x] Handle negative time values. Force positive value.
- [x] Handle edge cases in twoDigits function.
- [x] Clean up `TimerInput's` with event listeners helpers.
- [x] Clear timeout on `Stopwatch` unmount.
- [x] Setup `Stopwatch` timeInMs in useEffect for performance optimization.
- [x] Disable start when timer is 0. Inject JSX error.
- [x] ~~Handle edge cases for date picker, MAX_DAYS = 100,000,000.~~
- [x] Create custom stopwatch clock to allow for manual countdown handling.
- [x] Apply limit to Stopwatch equal to the maximum value of setTimeout, a 32-bit signed integer.
