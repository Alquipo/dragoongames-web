import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dragoon-dark'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
