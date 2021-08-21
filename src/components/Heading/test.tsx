import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Dragoon Games</Heading>)
    expect(screen.getByRole('heading', { name: /Dragoon games/i })).toHaveStyle(
      {
        color: '#FAFAFA'
      }
    )
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Dragoon Games</Heading>)
    expect(screen.getByRole('heading', { name: /Dragoon games/i })).toHaveStyle(
      {
        color: '#030517'
      }
    )
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Dragoon Games</Heading>)
    expect(screen.getByRole('heading', { name: /Dragoon games/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #EB46CE'
      }
    )
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Dragoon Games</Heading>)
    expect(
      screen.getByRole('heading', { name: /Dragoon games/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #EB46CE', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Dragoon Games</Heading>)
    expect(screen.getByRole('heading', { name: /Dragoon games/i })).toHaveStyle(
      {
        'font-size': '1.6rem'
      }
    )

    expect(
      screen.getByRole('heading', { name: /Dragoon games/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Dragoon Games</Heading>)

    expect(screen.getByRole('heading', { name: /Dragoon games/i })).toHaveStyle(
      {
        'font-size': '5.2rem'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #EB46CE' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #EB46CE', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #1f60ca' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #1f60ca', {
      modifier: '::after'
    })
  })
})
