module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};
