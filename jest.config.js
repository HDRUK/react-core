module.exports = {
  setupFilesAfterEnv: [
    "raf/polyfill",
    "<rootDir>/src/setupTests.ts",
    "@testing-library/jest-dom/extend-expect",
  ],
  moduleNameMapper: {
    "public/(.*)": "<rootDir>/public/$1",
  },
  modulePaths: ["<rootDir>/public"],
  coveragePathIgnorePatterns: [
    ".stories.ts",
    ".styles.ts",
    "index.*",
    "types.ts",
  ],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  roots: ["<rootDir>", "<rootDir>/src"],
  transformIgnorePatterns: ["/node_modules/(?!lodash-es/.*)"],
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
};
