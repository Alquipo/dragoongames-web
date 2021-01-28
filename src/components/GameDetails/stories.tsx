import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetail, { GameDetailsProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetail',
  component: GameDetail,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetail {...args} />
  </div>
)
