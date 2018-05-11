import path from 'path';

console.log(111)
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
export default {
  test: path.join(__dirname, 'src/index.js'),
};
