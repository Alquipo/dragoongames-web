import { render, screen } from '@testing-library/react'

import Highlight from '.'

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = render(<Highlight />)

    expect(
      screen.getByRole('heading', { name: /Highlight/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
