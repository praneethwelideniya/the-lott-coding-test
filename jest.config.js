export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json'
    }
  },
  testRegex: "/*.test.(ts|tsx)$",
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "test-coverage",
  coverageThreshold: {
   "global": {
   "branches": 0,
   "functions": 0,
   "lines": 0,
   "statements": 0
   }
  },
  moduleDirectories: ["node_modules", "src"]
};
