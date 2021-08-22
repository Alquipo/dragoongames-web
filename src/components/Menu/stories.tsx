import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'UI/Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'dragoon-dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  username: 'John Doe'
}
