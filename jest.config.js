module.exports = {
  moduleNameMapper: {
    // eslint-disable-next-line max-len
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test-helpers/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test-helpers/styleMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    'coverage',
    'test',
    'test-helpers',
    'jest.config.js',
    'node_modules',
  ],
  setupFiles: [
    './test-helpers/test-setup.js',
  ],
}
