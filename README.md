# tdd-react-redux-isomorphic
Sample Redux Isomorphic App

## Tech stack
* NodeJS
* Gulp
* [SemanticUI](https://semantic-ui.com/introduction/getting-started.html) is used as the UI library
* Express
* React / Redux
* Redux Sagas - for asyncronous operations
* Mountebank - for our fake service (over the wire)

## Project setup
Since SemanticUI uses gulp to build themed versions of the library, you must install gulp globally as a pre-requisite:
```
npm install -g gulp
```

Now you need to fetch all the required dependencies in the package.json file by running this command within the project directory:
```npm install```

In a different shell, run this command to start up the service: ```npm run mountebank```

## Running the project
Run this command to start up the app while watching for changes:
```npm run dev```

Now you can go to [http://localhost:8080/](http://localhost:8080/)
