import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import WishList, { WishListTemplateProps } from 'templates/WishList'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protectedRoutes'
import { GetServerSidePropsContext } from 'next'

export default function WishListPage(props: WishListTemplateProps) {
  return <WishList {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
