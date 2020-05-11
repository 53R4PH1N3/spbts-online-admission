import styled from "styled-components/macro";
import { StyledFormInputWrapper } from "styles";
import media from "styles/media";

export const StyledPersonalFieldWrapper = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);

  ${media.tabletLg} {
    grid-template-columns: 1fr;
  }

  #full-name {
    #suffix {
      width: 50%;

      ${media.laptopSm} {
        width: 100%;
      }

      ${media.laptopXs} {
        width: 50%;
      }

      ${media.mobileLg} {
        width: 100%;
      }

      ${media.mobileMd} {
        width: 50%;
      }
    }

    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    ${media.tabletLg} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }

    ${media.mobileMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: 1fr;
      }
    }
  }

  #gender-status {
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    ${media.laptopXs} {
      grid-column: 1 / -1;

      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    ${media.tabletLg} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);

        #spouse-name {
          grid-column: 1 / -1;
        }
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }

  #birth-info {
    grid-row: 3 / 4;
    grid-column: 1 / 2;

    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    #birth-place {
      grid-column: 1 / -1;
    }

    #birth-date {
    }

    #age {
      width: 50%;

      ${media.laptopSm} {
        width: 100%;
      }

      ${media.laptopXs} {
        width: 50%;
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

  #nationalism {
    grid-row: 4 / 5;
    grid-column: 1 / 2;

    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    #religion {
      grid-column: 1 / 3;

      ${media.tabletLg} {
        grid-column: 1 / -1;
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

    ${media.mobileMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: 1fr;
      }
    }
  }

  #contact-information {
    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    #home-address,
    #home-country-address {
      grid-column: 1 / -1;
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

    ${media.mobileMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: 1fr;
      }
    }
  }

  #parents-income {
    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }

    ${media.mobileMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: 1fr;
      }
    }
  }

  #parent-information {
    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    #fathers-name {
      grid-column: 1 / 3;
    }
    #mothers-name {
      grid-column: 1 / 3;
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

  #person-supporting {
    ${media.laptopXs} {
      grid-column: 1 / -1;
    }

    #other-supporter-name {
      grid-column: 1 / 3;
    }
    #other-supporter-address {
      grid-column: 1 / 3;
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

  #church-information {
    grid-column: 1 / -1;

    #church-name {
      grid-column: 1 / 3;
    }

    #denomination {
    }

    #church-address {
      grid-column: 1 / 3;
    }

    #association {
      ${media.tabletSm} {
        grid-column: 1 / -1;
      }
    }

    #church-pastor {
      grid-row: 1 / 2;
      grid-column: 4 / 6;
    }

    #church-pastor-contact-number {
      grid-row: 1 / 2;
      grid-column: 6 / -1;
    }

    ${media.laptopXs} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(3, 1fr);

        #church-pastor {
          grid-row: 3 / 4;
          grid-column: 1 / 3;
        }

        #church-pastor-contact-number {
          grid-row: 3 / 4;
          grid-column: 3 / -1;
        }
      }
    }

    ${media.tabletMd} {
      ${StyledFormInputWrapper} {
        grid-template-columns: repeat(2, 1fr);

        #date-baptized {
          grid-column: 1 / 2;
        }

        #church-pastor-contact-number {
          grid-row: 4 / 5;
          grid-column: 1 / 2;
        }
      }
    }

    ${media.tabletSm} {
      ${StyledFormInputWrapper} {
        column-gap: 1.6rem;
      }
    }
  }
`;
