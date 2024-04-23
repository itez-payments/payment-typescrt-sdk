module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  collectCoverageFrom: [
    "./src/**/*.ts"
  ],
  coverageDirectory: "./coverage"
};
