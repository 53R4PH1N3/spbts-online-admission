import styled from "styled-components/macro";
import { StyledCheckboxBox, StyledCheckboxLabel } from "styles";
import { StyledButtonPrimary } from "styles/components";
import media from "styles/media";

export const StyledTheology = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-color: var(--color-bg-primary);

  #certify-checkbox {
    height: max-content;

    align-items: flex-start;

    ${StyledCheckboxBox} {
      margin-top: 1.2rem;
      margin-right: 2rem;
    }
    ${StyledCheckboxLabel} {
      line-height: 1.7;
    }
  }
`;

export const StyledTheologyContainer = styled.main`
  padding: 4.8rem 6.4rem;

  ${media.laptopSm} {
    padding: 4.8rem;
  }

  ${media.tabletLg} {
    padding: 4rem;
  }

  ${media.tabletSm} {
    padding: 2.4rem;
  }

  ${media.mobileMd} {
    padding: 2rem 2.4rem;
  }

  ${media.mobileXs} {
    padding: 1.6rem 2rem;
  }
`;

export const StyledTheologySection = styled.section`
  display: grid;
  gap: 2rem;

  padding-bottom: 4rem;

  ${media.tabletSm} {
    row-gap: 0.8rem;
  }
`;

export const StyledTheologySectionHeader = styled.header`
  & > h2 {
    font-size: 4rem;

    ${media.tabletMd} {
      font-size: 3.2rem;
    }

    ${media.mobileLg} {
      font-size: 2.8rem;
    }
  }
`;

export const StyledTheologyCheckboxError = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: var(--color-primary);
  text-transform: uppercase;
`;

type CheckboxProps = {
  error?: boolean;
};

export const StyledTheologyCheckboxWrapper = styled.section<CheckboxProps>`
  height: max-content;

  padding: 4rem 2rem;

  border-radius: 3px;
  border: 1px dashed
    ${(p) => (p.error ? "var(--color-primary)" : "var(--color-disabled-text)")};

  ${media.tabletSm} {
    padding: 2.4rem 2rem;
  }

  ${media.mobileLg} {
    padding: 1.6rem 2rem;
  }

  ${media.mobileSm} {
    min-height: 30rem;

    padding: 1.2rem 1.6rem;
  }
`;

export const StyledTheologySubmitSection = styled.section`
  padding: 4rem 0;

  & > ${StyledButtonPrimary} {
    width: 40rem;
    padding: 1.2rem 2.4rem;

    text-transform: uppercase;

    ${media.tabletMd} {
      width: 100%;
    }

    & > svg {
      margin-top: -1px;
      margin-left: 0.8rem;
      margin-right: -0.8rem;
    }
  }
`;
