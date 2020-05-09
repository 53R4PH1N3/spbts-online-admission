import styled from "styled-components/macro";
import { StyledEnrolleeFieldWrapper } from "..";
import media from "styles/media";
import { StyledFormInputWrapper } from "styles";

export const StyledBasicEdFieldWrapper = styled(StyledEnrolleeFieldWrapper)`
  #school-year {
    grid-column: 1 / 2;

    ${media.laptopXs} {
      grid-column: 1 / 3;
    }

    ${media.tabletMd} {
      grid-row: 2 / 3;
    }

    ${media.tabletSm} {
      grid-column: 1 / -1;
    }
  }

  #last-school-year {
    ${media.laptopXs} {
      grid-column: 3 / -1;
    }

    ${media.tabletSm} {
      grid-column: 1 / -1;
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }

  #grade-level {
    ${media.tabletSm} {
      grid-column: 1 / 3;
    }
  }

  #section {
    grid-column: 4 / -1;

    ${media.tabletXl} {
      grid-column: 1 / 4;
    }

    ${media.tabletSm} {
      grid-column: 1 / -1;
    }
  }
`;
