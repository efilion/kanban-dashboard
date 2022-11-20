const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)