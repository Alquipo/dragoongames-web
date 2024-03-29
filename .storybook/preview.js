import '../.jest/next-image.mock'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'dragoon-dark',
    values: [
      {
        name: 'dragoon-light',
        value: theme.colors.lightBg
      },
      {
        name: 'dragoon-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
