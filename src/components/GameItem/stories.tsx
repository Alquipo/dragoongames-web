import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  parameters: {
    backgrounds: {
      default: 'dragoon-light'
    }
  },
  args: {
    img: 'https://source.unsplash.com/collection/4757197/151x170',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://dragoongames.alquipo.dev/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
