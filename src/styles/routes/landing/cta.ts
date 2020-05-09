import styled from "styled-components/macro";
import media from "styles/media";

export const StyledLandingCtaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.2rem;

  ${media.mobileMd} {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;
