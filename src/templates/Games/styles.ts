import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

const Animation = keyframes`
25% {
  opacity: 1;
}
33.3% {
  opacity: 1;
	transform: translateY(0.6rem * 3.8);
}
66.6% {
  opacity: 1;
	transform: translateY(0.6rem  * 5.2);
}
100% {
  opacity: 0;
  transform: translateY(0.6rem * 8) scale(0.5);
}
`

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* height: 10rem; */
  `}
`

export const ArrowDowns = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;

    > svg {
      color: ${theme.colors.primary};
      position: absolute;
      animation: ${Animation} 2s ease-out infinite;
      &:first-child {
        animation-delay: -0.6s;
      }
      &:nth-child(2) {
        animation-delay: -0.4s;
        transform: translateY(10px);
      }
      &:nth-child(3) {
        transform: translateY(20px);
        animation-delay: -0.2s;
      }
    }
  `}
`
export const ShowMoreLoading = styled.img`
  width: 4rem;
`
