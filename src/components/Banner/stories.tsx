import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Elements/Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: {
    img: 'https://source.unsplash.com/collection/4757197/1040x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
