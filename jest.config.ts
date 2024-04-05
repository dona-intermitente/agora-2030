import nextJest from 'next/jest.js'
import type { Config } from '@jest/types'

export const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true
}

const createJestConfig = nextJest({
  dir: './'
})

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return {
    ...nextJestConfig,
    automock: false,
    coverageProvider: 'v8',
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
      ...nextJestConfig.moduleNameMapper
    },
    resetMocks: false,
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
  }
}

module.exports = jestConfig
