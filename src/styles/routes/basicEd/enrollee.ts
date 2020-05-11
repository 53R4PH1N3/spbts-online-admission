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

  #desired-course {
    grid-column: 3 / -1;

    #sh-course-name {
      ${media.tabletMd} {
        grid-column: 1 / 3;
      }

      ${media.tabletSm} {
        grid-column: 1 / -1;
      }
    }

    #grade-level {
      ${media.tabletSm} {
        grid-column: 1 / 3;
      }
    }

    #academic-track {
      ${media.tabletSm} {
        grid-column: 3 / -1;
      }
    }

    ${media.laptopXs} {
      grid-column: 1 / -1;

      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(4, 1fr);

        #sh-course-name {
          grid-column: 1 / 3;
        }
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);

        #sh-course-name {
          grid-column: 1 / -1;
        }

        #grade-level {
          grid-column: 1 / 2;
        }

        #academic-track {
          grid-column: 2 / -1;
        }
      }
    }
  }
`;
