module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.[t|j]sx?$': 'ts-jest',
      '^.+\\.[t|j]sx?$': 'babel-jest',
      '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest'
    },
    testMatch: ['**/*.(test|spec).(ts|tsx)'],
    testEnvironment: 'jsdom',
    globals: {
      'ts-jest': {
        babelConfig: '<rootDir>/.babelrc',
        tsConfig: '<rootDir>/jest.tsconfig.json',
      },
    },
    coveragePathIgnorePatterns: ['/node_modules/', 'jest.setup.js'],
    setupFiles: ['./setup-tests.js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    moduleNameMapper: {
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    modulePaths: ['<rootDir>'],
  }
  