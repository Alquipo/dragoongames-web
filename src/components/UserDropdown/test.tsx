import { render, screen } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Alquipo" />)

    expect(screen.getByText(/Alquipo/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Alquipo" />)

    // open menu
    userEvent.click(screen.getByText(/Alquipo/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
