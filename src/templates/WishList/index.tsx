import Heading from 'components/Heading'
import { Container } from 'next/app'
import Base from 'templates/Base'
// import * as S from './styles'

const WishList = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
  </Base>
)

export default WishList
