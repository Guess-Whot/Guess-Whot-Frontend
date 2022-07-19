import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 1fr;
  height: 300px;
  border-style: solid;
  border-color: black;
  border-bottom-color: rgba(255, 0, 0, 0.1);
  border-right-color: rgba(255, 0, 0, 1);
  border-top-color: rgba(255, 0, 0, 1);
  border-left-color: rgba(255, 0, 0, 0.3);
  background-color: yellow;

  img {
    margin-top: 50px;
    width: 100%;
    height: 50%;
  }

  h3 {
    align-content: center;
    font-weight: 50px;
    margin-top: 40px;
  }
`;
