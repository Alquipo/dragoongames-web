import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "come see John's new adventures",
    buttonLabel: 'buy now',
    buttonLink: '/rdr'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
