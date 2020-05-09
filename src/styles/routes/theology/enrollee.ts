import styled from "styled-components/macro";
import media from "styles/media";
import { StyledFormInputWrapper } from "styles";

export const StyledEnrolleeFieldWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  #type-of-student {
    grid-column: 1 / -1;
  }

  #semester {
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    ${media.laptopSm} {
      grid-column: 1 / 3;
    }

    ${media.tabletMd} {
      grid-column: 1 / -1;
    }
  }

  #school-year {
    grid-row: 2 / 3;
    grid-column: 2 / 3;

    ${media.laptopSm} {
      grid-column: 3 / 4;
    }

    ${media.laptopXs} {
      grid-column: 3 / -1;
    }

    ${media.tabletMd} {
      grid-row: 3 / 4;
      grid-column: 1 / -1;
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }

  #desired-course {
    grid-column: 1 / -1;

    #course-name {
      grid-column: 1 / 3;
    }

    #year-level {
      grid-column: 3 / 4;
    }

    #school-last-attended {
      grid-column: 4 / -1;
    }

    ${media.tabletXl} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(4, 1fr);
      }

      #course-name {
        grid-column: 1 / 4;

        ${media.tabletSm} {
          grid-column: 1 / -1;
        }
      }

      #year-level {
        grid-column: 4 / -1;

        ${media.tabletSm} {
          grid-column: 1 / 3;
        }
      }

      #school-last-attended {
        grid-column: 1 / -1;
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }
`;
