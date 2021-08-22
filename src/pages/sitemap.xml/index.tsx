import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import { QueryGames } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

const apolloClient = initializeApollo()

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await apolloClient.query<QueryGames>({
    query: QUERY_GAMES
  })

  const fields = data.games.map(({ slug }) => ({
    loc: `https://dragoongames.alquipo.dev/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://dragoongames.alquipo.dev',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/games',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/sign-in',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/sign-up',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/wishlist',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/profile/me',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/profile/orders',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/cart',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/success',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://dragoongames.alquipo.dev/forgot-password',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
