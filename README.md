# farage-barrage

### Hone your clicks and political convictions simultaneously.
![](https://media.giphy.com/media/LSFhSXwjbiBWw/giphy.gif)
# +
![](https://media.giphy.com/media/eByhRwwLUpEze/giphy.gif)
# =
# Farage Barrage

- Core tech:
  - React [(CRA v2)](https://github.com/facebook/create-react-app)
    - Styled components 
  - Express
    - Mongoose
  - MongoDB
    - mLab


## The aim of the game 

- Milkshake as many Farages as you possibly can within one minute.
- Successfully clicking a Farage will yield +1 points
- Accidently clicking your Github profile picture will yield -1 points
- Top 5 total scores are displayed in Login

## How To Play

- Go to https://farage-barrage.herokuapp.com/
- Read 3-line instructions
- Enter name
- Enter Github Username
- Sync to your Github profile
- When you are ready, click PLAY 


## Local Set Up Instructions
 1. Clone this repo.
 2. Run ```npm i``` to install Dependencies.
 3. Run ```npm run nodemon``` to start express server.
 4. Make a new tab in CLI.
 4. cd client -> Run ```npm start``` to run the React server.


## Core learning 
- Don't ```npm i jest``` on a Create React App (no need
- The power and utility of patterns like 'lifting state'
- MongoDB: how to setup a Mongo Schema
- mLab DBaaS - cloud db service

## TODO
- [ ] refactor & exhaustively remove commented-out code
- [ ] refactor all css rules to styled components for uniformity's sake
- [ ] disable Back button in Game page comp when playing the 60sec game


## Stretch Goals
- [x] Add loading icon/animation/text for github image
- [x] landing window with input for username and button to start game
- [x] Have a timer
- [ ] Character select functionality (Farage, Bush, Corbyn & their respective milkshakes, shoes and eggs projectiles)
- [ ] Cursor animation on click
- [ ] Add style the Game comp to a setting related to the stretch characters above(newcastle football scoreboard)
- [x] Difficulty level incrememnt
