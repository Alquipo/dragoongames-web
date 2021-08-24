import { render } from 'utils/test-utils'

import Tooltip from '.'

describe('<Tooltip />', () => {
  it('should render the heading', () => {
    const { container } = render(<Tooltip text="Test">Test</Tooltip>)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  cursor: pointer;
  position: relative;
  outline: 0;
}

.c0::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 100%;
  margin-right: 15px;
  width: 180px;
  padding: 10px;
  border-radius: 10px;
  background: #03071e;
  color: #FAFAFA;
  text-align: center;
  display: none;
}

.c0:hover::before {
  display: block;
}

.c0::after {
  content: '';
  position: absolute;
  right: 100%;
  margin-right: -5px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: 10px solid #03071e;
  border-color: transparent transparent transparent #03071e;
  display: none;
}

.c0:hover::before,
.c0:hover::after {
  display: block;
}

@media (max-width:520px) {
  .c0::before {
    top: -80%;
    -webkit-transform: translateY(-90%);
    -ms-transform: translateY(-90%);
    transform: translateY(-90%);
    left: 25%;
  }
}

@media (max-width:520px) {
  .c0::after {
    right: 40%;
    top: 0%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border-color: #03071e transparent transparent transparent;
  }
}

<div
  class="c0"
  data-text="Test"
  tabindex="1"
>
  Test
</div>
`)
  })
})
