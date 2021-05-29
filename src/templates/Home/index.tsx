import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  mostPopularGamesTitle,
  upcomingGames,
  upcomingGamesTitle,
  upcomingHighlight,
  freeGames,
  freeGamesTitle,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      games={freeGames}
      highlight={freeHighlight}
    />
  </Base>
)

export default Home
