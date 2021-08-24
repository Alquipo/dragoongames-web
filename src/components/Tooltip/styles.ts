import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    position: relative;
    outline: 0;

    &::before {
      content: attr(data-text); /* here's the magic */
      position: absolute;

      /* vertically center */
      top: 50%;
      transform: translateY(-50%);

      /* move to right */
      right: 100%;
      margin-right: 15px; /* and add a small left margin */

      @media (max-width: 520px) {
        top: -80%;
        transform: translateY(-90%);

        /* move to right */
        left: 25%;
        /* margin-bottom: 10px; */
      }

      /* basic styles */
      width: 180px;
      padding: 10px;
      border-radius: 10px;
      background: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      text-align: center;

      display: none; /* hide by default */
    }

    &:hover::before {
      display: block;
    }

    &::after {
      content: '';
      position: absolute;

      /* position tooltip correctly */
      right: 100%;
      margin-right: -5px;

      /* vertically center */
      top: 50%;
      transform: translateY(-50%);

      /* the arrow */
      border: 10px solid ${theme.colors.mainBg};
      border-color: transparent transparent transparent ${theme.colors.mainBg};

      display: none;

      @media (max-width: 520px) {
        right: 40%;

        top: 0%;
        transform: translateY(-50%);

        border-color: ${theme.colors.mainBg} transparent transparent transparent;
      }
    }

    &:hover::before,
    &:hover::after {
      display: block;
    }

    /* position: relative;
    outline: 0;

    &::before,
    &::after {
      left: 45%;
      opacity: 0;
      position: absolute;
      z-index: -100;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: scale(1) translateY(0);
      z-index: 100;
    }

    &::before {
      border-style: solid;
      border-width: 1em 0.75em 0 0.75em;
        transparent;
      bottom: 100%;
      content: '';
      margin-left: -0.5em;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26),
        opacity 0.65s 0.5s;
      transform: scale(0.6) translateY(-90%);
    }

    &:hover::before {
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
    }

    &::after {
      border-radius: 0.25em;
      bottom: 117%;
      content: attr(data-tip);
      margin-left: -8rem;
      padding: 1em;
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;
      transform: scale(0.6) translateY(50%);
      width: 14rem;
    }

    &:hover::after {
      transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);
    }

    @media (max-width: 760px) {
      &::after {
        font-size: 0.75em;
        margin-left: -5em;
        width: 10em;
      }
    } */
  `}
`
