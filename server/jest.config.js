module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
