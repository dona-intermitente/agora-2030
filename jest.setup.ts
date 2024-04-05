import '@testing-library/jest-dom'

require('jest-fetch-mock').enableMocks()

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }
