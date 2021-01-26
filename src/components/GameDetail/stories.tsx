import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetail, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetail',
  component: GameDetail,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetail {...args} />
  </div>
)
