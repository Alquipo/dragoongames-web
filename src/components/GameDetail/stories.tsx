import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetail from '.'

export default {
  title: 'Game/GameDetail',
  component: GameDetail,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetail />
  </div>
)
