import express, { Router } from 'express';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import path from 'path';
import React from 'react';
import compress from 'compression';
import HttpStatus from 'http-status-codes';
import bodyParser from 'body-parser';
import configureStore from './store';
import rootSaga from './sagas';
import getRoutes from './routes';
import config from '../config';

const app = express();

/* gzip the response */
app.use(compress());

/* serving static resources such as images, semantic and jquery */
const imagesDir = path.join(__dirname, 'images/');
app.use('/images', express.static(imagesDir));

const distDir = path.join(__dirname, 'dist/');
app.use('/dist', express.static(distDir));

const semanticDir = path.join(__dirname, 'semantic/');
app.use('/semantic', express.static(semanticDir));

const fontawesomeDir = path.join(__dirname, 'font-awesome/');
app.use('/font-awesome', express.static(fontawesomeDir));

const jquery = path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js');
app.use('/dist/js/jquery.min.js', express.static(jquery));

const apiRouter = Router();
apiRouter.use(bodyParser.urlencoded({ extended: false }));
apiRouter.use(bodyParser.json());
apiRouter.use('/search', require('./api/search-route').default);

app.use('/api', apiRouter);

function layout(body, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>ThoughtWorks | Staffing</title>
        <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/semantic/dist/semantic.min.css"/>
        <link rel="stylesheet" type="text/css" href="/dist/css/styles.css"/>        
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="app">${body}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/dist/js/jquery.min.js"></script>
        <script src="/semantic/dist/semantic.min.js"></script>
        <script src="/dist/js/bundle.js"></script>
      </body>
    </html>
    `;
}

app.use((req, res) => {
  const store = configureStore();
  /* eslint complexity: ["error", 5] */
  match({ routes: getRoutes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    } else if (redirectLocation) {
      res.redirect(HttpStatus.MOVED_TEMPORARILY, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps && renderProps.components) {
      const rootComp = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      store.runSaga(rootSaga).done.then(() => {
        res.status(HttpStatus.OK).send(
          layout(
            renderToString(rootComp),
            JSON.stringify(store.getState())
          )
        );
      }).catch((e) => {
        console.log('Error running saga - ', e.message);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e.message);
      });

      renderToString(rootComp);
      store.close();
    } else {
      res.status(HttpStatus.NOT_FOUND).send('Not found');
    }
  });
});

/* eslint no-console: ["error", {allow: ["log"] } ] */
console.log('Application is starting...');
app.listen(config.port, () => {
  console.log(`Application started successfully on port ${config.port}!`);
});
