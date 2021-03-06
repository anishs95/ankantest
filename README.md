# Ankan Mobile App

Reactnative Project for Ankan Mobile App.

## Requirements

1. Node :- https://nodejs.org/en/download/
2. VS Code :- https://code.visualstudio.com/download
3. Android Studio/ Emulator/ Android/ IPhone :- https://developer.android.com/studio
4. Java :- JDK8 / JDK9

## Create your first React Native App

1. Set Up Environment variables for Java jdk/jre.
2. Setup emulator if needed
3. Follow the documentation to create expo Awsome Project
   https://reactnative.dev/docs/environment-setup

## Run Ankan Mobile App

1. Clone the project : https://github.com/ankantech/ankan-reactnative
2. cd ankan-reactnative
3. npm install
4. expo start

## Scripts

"scripts": {

1. "android": "react-native run-android",
2. "ios": "react-native run-ios",
3. "start": "npm run env -- prod && react-native start",
4. "start:dev": "npm run env -- dev && react-native start --reset-cache",
5. "env": "node ./env/set-env.js",
6. "build": "tsc -p ./tsconfig.json",
7. "build:web": "expo build:web",
8. "clean": "rimraf ./dist ./web-build",
9. "lint": "tslint -c ./tslint.json ./src/\*_/_.{ts,tsx}",
10. "changelog": "conventional-changelog -i ./CHANGELOG.md -s",
11. "postinstall": "jetify"
    },

![Ankan Material](https://camo.githubusercontent.com/f0487d92194f3c685213539c53e9784113cd8a4b/68747470733a2f2f692e696d6775722e636f6d2f58384f344748622e706e67)

![Preview](https://i.imgur.com/2E2nWHc.jpg)

## Key features:

- Built with **TypeScript**.
- **Dark and Light themes** could be used simultaneously and changed on the fly.
- **40 ready-to-use stunning screens** – for any domain: e-commerce, social, fitness, etc.
- **Huge variety of customizable layouts**, use “as is” or add new blocks from the UI Kit.
- **Integration with Eva Design System** allows you to create mobile application staying in brand style and get clean, consistency design

## Documentation:

This template is using [UI Ankan components][link:ui-kitten], [here you can find documentation and other useful articles][link:doc-ui-kitten].
