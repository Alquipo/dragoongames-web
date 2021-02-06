import React from 'react'
// import { screen } from '@testing-library/react'
// import { MockedProvider } from '@apollo/client/testing'
// import { renderWithTheme } from 'utils/tests/helpers'
// import gamesMock from 'components/GameCardSlider/mock'
// import filterItemsMock from 'components/ExploreSidebar/mock'

// import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render sections', async () => {
    //teste
  })
})
