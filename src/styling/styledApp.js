import styled from 'styled-components/macro';

export const ScreenContainer = styled.div`
  position: relative;
  min-width: 326%;
  margin-left: 29%;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: ${props =>
    props.containerMarginTop ? props.containerMarginTop : 0};

  @media (min-width: 700px) {
    transform: scale(0.8);
    margin-right: 5%;
    margin-top: 5%;
  }

    @media (orientation: landscape) and (max-width: 900px) {
    transform: scale(0.34) translate(-10%, -3%);
  }

  @media (min-width: 900px) {
    transform: scale(0.7);
    margin-right: 8%;
  }

  @media (min-width: 1000px) {
    transform: scale(0.5);
    margin-right: 30%;
  }

  @media (min-width: 1300px) {
    transform: scale(0.4);
    margin-right: 30%;
    /* margin-top: 10%; */
  }

  @media (min-width: 1800px) {
    transform: scale(0.3);
    margin-right: 30%;
  }


  /*
  @media (orientation: landscape) and (min-width: 900px) {
    transform: scale(0.4) translate(0, 0);
  } */
`;
