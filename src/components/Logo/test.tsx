import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    expect(
      screen.getByLabelText(/Dragoon Games Store/i).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(
      screen.getByLabelText(/Dragoon Games Store/i).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(
      screen.getByLabelText(/Dragoon Games Store/i).parentElement
    ).toHaveStyle({
      width: '15rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Dragoon Games Store/i).parentElement
    ).toHaveStyle({
      width: '25rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Dragoon Games Store/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
