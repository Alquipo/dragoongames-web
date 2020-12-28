import { render, screen } from '@testing-library/react'

import GameCard from '.'

describe('<GameCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameCard />)

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
