import styled from "styled-components/macro";
import media from "styles/media";
import Rodal from "rodal";

export const StyledModal = styled(Rodal)`
  & > .rodal-dialog {
    ${media.mobileLg} {
      width: 90% !important;
    }
  }
`;

export const StyledModalHeader = styled.header`
  & > h4 {
    font-weight: 500;
    text-transform: capitalize;

    display: flex;
    align-items: center;

    & > svg {
      width: 1.6rem;
      height: 1.6rem;
      fill: currentColor;

      margin-right: 0.8rem;
    }
  }

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    margin-bottom: -1.2rem;

    background-color: var(--color-border-primary);
  }
`;

export const StyledModalContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 4.8rem 2rem;
  padding-bottom: 1.6rem;

  display: grid;
  grid-template-rows: 1fr max-content;
`;

export const StyledModalContentHeader = styled.header`
  display: grid;
  row-gap: 0.4rem;
  align-content: start;

  & > h3 {
    font-size: 2.8rem;

    ${media.mobileMd} {
      font-size: 2.4rem;
    }
  }

  & > p {
    font-size: 1.6rem;

    ${media.mobileMd} {
      font-size: 1.4rem;
    }
  }
`;
