import styled from 'styled-components/macro';

export const ScreenContainer = styled.div`
  position: relative;
  min-width: 326%;
  margin-left: 29%;
  margin-right: 0;
  margin-bottom: 0;
  /* margin-top: ${props =>
    props.containerMarginTop ? props.containerMarginTop : 0}px; */

  @media (min-width: 550px) {
    min-width: 1793px;
    margin-left: 158px;
  }

  @media (orientation: landscape) and (hover: none) and (pointer: coarse) and (max-width: 1000px) {
    min-width: 0;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
  }

  /* 
  @media (min-width: 550px) {
    transform: scale(0.85);
  }

  @media (min-width: 700px) {
    transform: scale(0.8);
    margin-right: 5%;
    margin-top: 20%;
  }

  @media (orientation: landscape) and (max-width: 900px) {
    transform: scale(0.34) translate(-10%, -3%);
  }

  @media (min-width: 900px) {
    transform: scale(0.7);
    margin-right: 8%;
  }

  @media (min-width: 1000px) {
    transform: scale(0.6);
    margin-right: 30%;
  }

   @media (min-width: 1150px) {
    transform: scale(0.5);
  }

  @media (min-width: 1300px) {
    transform: scale(0.45);
    margin-right: 30%;
    margin-top: 10%;
  }

  @media (min-width: 1800px) {
    transform: scale(0.4);
    margin-right: 30%;
  } */

  /*
  @media (orientation: landscape) and (min-width: 900px) {
    transform: scale(0.4) translate(0, 0);
  } */
`;
