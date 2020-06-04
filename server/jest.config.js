module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/database/migrations/*',
    '!<rootDir>/src/database/seeds/*',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/*.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
