import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
// import { gql, useQuery } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  // const { data, loading, error } = useQuery(gql`
  //   query getGames {
  //     games {
  //       name
  //     }
  //   }
  // `)

  // if (loading) return <p>Loading...</p>

  // if (error) return <p>{error}</p>

  // if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
