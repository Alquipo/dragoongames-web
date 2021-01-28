// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import WishList from '.'

describe('<WishList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<WishList />)

    // expect(screen.getByRole('heading', { name: /WishList/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
