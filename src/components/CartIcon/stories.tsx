import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon from '.'

export default {
  title: 'Cart/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dragoon-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />
export const withItems: Story = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 3
}
