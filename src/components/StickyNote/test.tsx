import { render } from 'utils/test-utils'

import { StickyNote } from '.'

describe('<StickyNote />', () => {
  it('should render correctly', () => {
    const { container } = render(<StickyNote />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  margin-bottom: 6rem;
  background-color: #0a1d3e;
  color: #FAFAFA;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 20;
}

.c0 a {
  color: #EB46CE;
}

.c0 a,
.c0 p {
  font-size: 1.4rem;
  line-height: 1.3;
}

@media (min-width:768px) {
  .c0 a,
  .c0 p {
    font-size: 1.6rem;
  }
}

<div
  class="c0"
/>
`)
  })
})
