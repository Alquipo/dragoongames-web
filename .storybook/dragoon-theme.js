import { create } from '@storybook/theming'
import theme from '../src/styles/theme'
import logo from '../public/img/logo-full.svg'

export default create({
  base: 'dark',
  colorSecondary: theme.colors.primary,

  brandTitle: 'Dragoon Games Store',
  brandUrl: 'https://dragoongames.alquipo.dev/',
  brandImage: logo
})
