


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Farage Barrage

## How To Play

Click on Farage to milkshake him and increase your score!



## Local Set Up Instructions
 1. Clone this repo.
 2. Go to the repo folder farage-barrage.
 3. Run ```npm i``` to install all the packages used.
 4. Run ```npm start``` to run the server.
 5. Visit localhost:3000 in your browser - you're set up!

## Goals
<!-- - Track mouse position (refer back to workshop) -->
- [x] Set default player state to be an x/y coordinate
- [x] Hook to update player state (position) on click
- [x] API req to github API: MVP bobby's github
- [x] avatar_url profilepiccy
- [x] Reduce vw width and height by image width and height
- [x] Have a score counter 
- [x] Increment score when farage SVG is clicked
- [x] Decrement score when github SVG is clicked
- [ ] Style the game board
- [ ] Style the player/Farage images
- [x] Integration tests

## Stretch Goals
- [x] Add loading icon/animation/text for github image
- [ ] landing window with input for username and button to start game
- [ ] Have a timer
- [ ] Character select functionality (Farage, Bush, Corbyn)
- [ ] Cursor animation on click
- [ ] Animate Farage transition
- [ ] Add some kind of Newcastle styling/easter egg (newcastle football scoreboard)
- [ ] Difficulty levels tied to Farage movement speed

## Components 

- Farage SVG component
- Player SVG component
- Scoreboard component

## Things We Learned
- Don't push API keys to Github
- Don't ```npm i jest``` on a Create React App (no need)
- Assets, e.g images need an import
- How 'lifting the state' works in React


![](https://i.imgur.com/Z0IcGtp.png)
![](https://i.imgur.com/z2IvaUG.png)
![](https://i.imgur.com/8XgcK3b.png)












## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
