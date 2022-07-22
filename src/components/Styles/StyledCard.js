import styled, { css } from 'styled-components';

const CardSide = css`
width: 1fr;
height: 300px;
border: 7px groove red;
background-color: yellow;.
-moz-backface-visibility:hidden;
-webkit-backface-visibility:hidden;
backface-visibility:hidden;
`;

export const CardContainer = styled.div`
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const StyledCard = styled.div`
  ${CardSide}

  img {
    margin-top: 50px;
    width: 100%;
    height: 50%;
    z-index: 0;
  }

  h3 {
    align-content: center;
    font-weight: 50px;
    margin-top: 40px;
  }
`;

export const StyledCardBack = styled.div`
  ${CardSide}

  img {
    margin-top: 50px;
    width: 100%;
    height: 50%;
    transform: rotateY(-180deg) translate(100%, 0);
    z-index: 1;
  }

  h3 {
    align-content: center;
    font-weight: 50px;
    margin-top: 40px;
  }
`;

export const StyledCardInner = styled.div`
  transition: transform 500ms;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;
