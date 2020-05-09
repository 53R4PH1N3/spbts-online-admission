import styled from "styled-components/macro";
import media from "styles/media";
import { StyledFormInputWrapper } from "styles";

export const StyledEducationalFieldWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  ${media.tabletLg} {
    grid-template-columns: 1fr;
  }

  #elementary {
    ${media.laptopXl} {
      grid-column: 1 / -1;
    }

    #elementary-school-name {
      grid-column: 1 / 3;
    }

    #elementary-year-graduated {
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

  #junior-high-school {
    ${media.laptopXl} {
      grid-column: 1 / -1;
    }

    #jh-school-name {
      grid-column: 1 / 3;
    }

    #jh-year-graduated {
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

  #senior-high-school {
    ${media.laptopXl} {
      grid-column: 1 / -1;
    }

    #sh-school-name {
      grid-column: 1 / 3;
    }

    #sh-year-graduated {
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

  #college-attended {
    ${media.laptopXl} {
      grid-column: 1 / -1;
    }

    #college-school-name {
      grid-column: 1 / -1;
    }

    #college-course-taken {
      grid-column: 1 / 3;
    }

    #college-year-graduated {
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

  #special-skills {
    ${media.laptopXl} {
      grid-column: 1 / -1;
    }
  }
`;
