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
    modulePathIgnorePatterns: [
        "<rootDir>/.rollup.cache",
        "<rootDir>/.storybook",
        "<rootDir>/dist",
    ],
    coveragePathIgnorePatterns: [
        ".stories.ts",
        ".styles.ts",
        "index.*",
        "types.ts",
    ],
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    roots: ["<rootDir>", "<rootDir>/src"],
    transformIgnorePatterns: ["/node_modules/(?!lodash-es/.*)"],
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
