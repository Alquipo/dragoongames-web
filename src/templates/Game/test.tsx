// import {  screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Game />)
  })
})
