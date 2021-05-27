import Base from 'templates/Base'

import { useWishlist } from 'hooks/use-wishlist'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Loader from 'components/Loader'

import * as S from './styles'

export type WishListTemplateProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishList = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishListTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to you wishlist appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default WishList
