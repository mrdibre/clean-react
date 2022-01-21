/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  maxWorkers: "50%",
  clearMocks: true,
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^(data|domain|infra|ui)(.*)$": "<rootDir>/src/$1/$2",
  },
};
