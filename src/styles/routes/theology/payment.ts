import styled from "styled-components/macro";
import media from "styles/media";

export const StyledPaymentWrapper = styled.div`
  display: grid;
  row-gap: 0.8rem;

  & > h3 {
    font-size: 2.4rem;
    font-weight: 500;

    text-transform: uppercase;

    ${media.tabletMd} {
      font-size: 2rem;
    }

    ${media.mobileLg} {
      font-size: 1.8rem;
    }

    & > span {
      color: var(--color-primary);
    }
  }

  & > p {
    font-family: "Roboto", sans-serif;
  }
`;

export const StyledPaymentInstructions = styled.div`
  display: grid;
  row-gap: 0.8rem;

  margin-top: 1rem;

  & > h4 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  & > p {
    font-family: "Roboto", sans-serif;

    & > span {
      color: var(--color-heading-text);
      font-weight: 500;
    }
  }
`;

export const StyledPaymentMoneyTransfer = styled.div`
  font-family: "Roboto", sans-serif;
  & > p {
    display: grid;
    row-gap: 0.8rem;

    & > span {
      font-weight: 500;
      color: var(--color-heading-text);
    }
  }
`;
