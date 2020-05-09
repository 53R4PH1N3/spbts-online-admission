import styled from "styled-components";
import { StyledPersonalFieldWrapper } from "..";
import media from "styles/media";
import { StyledFormInputWrapper } from "styles";

export const StyledBasicEdPersonalFieldWrapper = styled(
  StyledPersonalFieldWrapper
)`
  #permanent-address {
    grid-column: 1 / -1;
  }

  #scholarship-info {
    #scholarship {
      grid-column: 1 / 3;
    }

    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    ${media.tabletMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    ${media.tabletMd} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }
`;
