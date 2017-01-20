// required for using async/await
import 'babel-polyfill';
import jsdom from 'jsdom';
import jquery from 'jquery';
// setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>', { url: 'http://fakehost:9131' });

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;
global.$ = jquery(win);

process.env.NODE_ENV = 'test';

// take all properties of the window object and also attach it to the
// mocha global object

// adapted from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
