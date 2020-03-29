module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  preset: "ts-jest",

  testEnvironment: "jsdom",
  globals: {
    jsx: "react",
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
  // setupFiles: ["<rootDir>/tests/test-setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
}
