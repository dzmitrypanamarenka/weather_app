/* eslint-disable */

module.exports = {
  rootDir: '../src/',
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx}',
  ],
  setupTestFrameworkScriptFile: './setupTests.js',
  testMatch: [
    '<rootDir>/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '../node_modules/babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '../config/jest/fileTransformer',
    "^.+\\.css$": "../config/jest/cssTransformer.js"
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
  ],
};
