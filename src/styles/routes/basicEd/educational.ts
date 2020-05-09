import styled from "styled-components";
import { StyledEducationalFieldWrapper } from "..";
import media from "styles/media";
import { StyledFormInputWrapper } from "styles";

export const StyledBasicEdEducationalFieldWrapper = styled(
  StyledEducationalFieldWrapper
)`
  #authorized-persons {
    grid-column: 1 / -1;

    #authorized-person-name-1 {
      grid-column: 1 / 3;
    }

    #authorized-person-name-2 {
      grid-column: 4 / 6;
    }

    ${media.tabletXl} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(3, 1fr);

        #authorized-person-name-2 {
          grid-column: 1 / 3;
        }
      }
    }

    ${media.tabletMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }
`;
