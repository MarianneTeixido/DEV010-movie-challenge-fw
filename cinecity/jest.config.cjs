module.exports = {
    roots: ["<rootDir>/src"],
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
  

// module.exports = {
//   roots: ["<rootDir>/src"],
//   collectCoverageFrom: [
//     "src/**/*.{js,jsx,ts,tsx}",
//     "!src/**/*.d.ts",
//     "!src/mocks/**",
//   ],
//   coveragePathIgnorePatterns: [],
//   setupFilesAfterEnv: ["./config/jest/setupTests.js"],
//   testEnvironment: "jsdom",
//   modulePaths: ["<rootDir>/src"],
//   transform: {
//     "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
//     "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//     "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
//       "<rootDir>/config/jest/fileTransform.js",
//   },
//   transformIgnorePatterns: [
//     "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
//     "^.+\\.module\\.(css|sass|scss)$",
//   ],
//   moduleNameMapper: {
//     "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
//     "^.+\\.(svg)$": "<rootDir>/src/__mocks__/fileMock.js",
//   },
//   moduleFileExtensions: [
//     // Place tsx and ts to beginning as suggestion from Jest team
//     // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
//     "tsx",
//     "ts",
//     "web.js",
//     "js",
//     "web.ts",
//     "web.tsx",
//     "json",
//     "web.jsx",
//     "jsx",
//     "node",
//   ],
//   watchPlugins: [
//     "jest-watch-typeahead/filename",
//     "jest-watch-typeahead/testname",
//   ],
//   resetMocks: true,
// };