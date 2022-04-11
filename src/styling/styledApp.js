import styled from 'styled-components/macro';

export const ScreenContainer = styled.div`
  position: relative;
  min-width: 326%;
  margin-left: 29%;
  margin-right: 0;
  margin-bottom: 0;
  transition: margin-left 1s ease;

  @media (min-width: 550px) {
    min-width: 1793px;
    margin-left: 158px;
    margin-top: ${props =>
      props.containerMarginTop ? props.containerMarginTop : 0}px;
  }

  // query for mobile in landscape
  @media (orientation: landscape) and (hover: none) and (pointer: coarse) and (max-width: 1000px) {
    min-width: 0;
    margin-left: 0;
  }

  // query for iPads
  @media (orientation: portrait) and (hover: none) and (pointer: coarse) and (max-width: 1440px) and (min-width: 768px) {
    transform: scale(1.4);
    margin-top: 23%;
    margin-left: 218px;
    margin-top: ${props =>
      props.containerMarginTop ? props.containerMarginTop : 0}px;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
  }
`;
