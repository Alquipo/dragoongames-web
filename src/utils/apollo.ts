import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
import apolloCache from './apolloCache'
import { Session } from 'next-auth'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext((_, { headers }) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : ''
    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  //serve para verificar se já existe uma instância, para nao criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  //recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  //sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )

  return store
}
