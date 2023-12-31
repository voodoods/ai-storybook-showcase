module.exports = {
  // ...
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
  ],
};
