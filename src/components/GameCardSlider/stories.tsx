import { Story, Meta } from '@storybook/react/types-6-0'

import { GameCardProps } from 'components/GameCard'
import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'Game/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    backgrounds: {
      default: 'dragoon-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
