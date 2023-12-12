module.exports = {
    roots: ["<rootDir>/src"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    ],
    moduleNameMapper: {
        "^.+\\.css$": "<rootDir>/src/__mocks__/file-mock.cjs",
        "^.+\\.png$": "<rootDir>/src/__mocks__/file-mock.cjs",

      },
  };
  