// import { screen } from '@testing-library/react'

import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Gallery from '.'

const items = [
  {
    src: '/img/games/cyberpunk-1.jpg',
    label: 'Gallery Image 1'
  },
  {
    src: '/img/games/cyberpunk-2.jpg',
    label: 'Gallery Image 2'
  },
  {
    src: '/img/games/cyberpunk-3.jpg',
    label: 'Gallery Image 3'
  },
  {
    src: '/img/games/cyberpunk-4.jpg',
    label: 'Gallery Image 4'
  },
  {
    src: '/img/games/cyberpunk-5.jpg',
    label: 'Gallery Image 5'
  },
  {
    src: '/img/games/cyberpunk-6.jpg',
    label: 'Gallery Image 6'
  }
]

describe('<Gallery />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Gallery items={items} />)

    // expect(
    //   screen.getByRole('heading', { name: /Gallery/i })
    // ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
