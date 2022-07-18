import styled from "styled-components";

export const StyledCard = styled.div`
  max-width: 1fr;
  max-height: 1fr;
  border-style: solid;
  border-color: black;
  border-bottom-color: rgba(255, 0, 0, 0.1);
  border-right-color: rgba(255, 0, 0, 1);
  border-top-color: rgba(255, 0, 0, 1);
  border-left-color: rgba(255, 0, 0, 0.3);
  background-color: yellow;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;