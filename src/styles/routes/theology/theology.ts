import styled from "styled-components/macro";
import { StyledCheckboxBox, StyledCheckboxLabel } from "styles";
import { StyledButtonPrimary } from "styles/components";

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
`;

export const StyledTheologySection = styled.section`
  display: grid;
  gap: 2rem;

  padding-bottom: 4rem;
`;

export const StyledTheologySectionHeader = styled.header`
  & > h2 {
    font-size: 4rem;
  }
`;

export const StyledTheologyCheckboxWrapper = styled.section`
  padding: 4rem 2rem;

  border-radius: 3px;
  border: 1px dashed var(--color-disabled-text);
`;

export const StyledTheologySubmitSection = styled.section`
  padding: 4rem 0;

  & > ${StyledButtonPrimary} {
    width: 40rem;
    padding: 1.2rem 2.4rem;

    text-transform: uppercase;

    & > svg {
      margin-top: -1px;
      margin-left: 0.8rem;
      margin-right: -0.8rem;
    }
  }
`;
