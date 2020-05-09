import styled from "styled-components/macro";
import { media } from "styles";

export type GridProps = {
  rows?: string;
  columns?: string;
  disabled?: boolean;
};

export const StyledForm = styled.form`
  display: grid;
  row-gap: 2rem;
`;

export const StyledFormHeader = styled.header`
  display: grid;
  row-gap: 0.8rem;

  text-align: center;

  padding: 4rem 0;

  & > h1 {
    font-size: 4.8rem;
    font-weight: 500;
  }

  & > p {
    font-size: 1.6rem;
  }
`;

export const StyledFormHeading = styled.h3`
  width: 100%;

  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-heading-text);

  display: flex;
  align-items: center;

  & > span {
    margin-left: 1rem;

    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    column-gap: 0.8rem;
  }
`;

export const StyledFormInputContainer = styled.div<GridProps>`
  width: 100%;
  height: max-content;

  display: grid;
  row-gap: .4rem;
  column-gap: 2rem;

  grid-template-rows: ${(p) => (p.rows ? `${p.rows}` : "1fr")};
  grid-template-columns: ${(p) => (p.columns && `${p.columns}`) || "1fr"};

  /* ${media.laptopXs} {
    display: ${(p) => p.disabled && "none"};
  } */

  ${StyledFormHeading} {
    color: ${(p) => p.disabled && "var(--color-disabled-text)"};

    & > label {
      opacity: ${(p) => (p.disabled ? "0" : "1")};
      visibility: ${(p) => (p.disabled ? "hidden" : "visible")};

      & > span:last-child {
        padding: 0;
      }
    }
  }
`;

export const StyledFormRadioContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  & > header {
    margin-right: 2rem;
  }

  ${StyledFormHeading} {
    color: ${(p) => p.disabled && "var(--color-disabled-text)"};
  }
`;

export const StyledFormInputHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 0.8rem 0;
`;

export const StyledFormInputWrapper = styled.div<GridProps>`
  display: grid;
  row-gap: 1.6rem;
  column-gap: 2rem;

  grid-template-rows: ${(p) => (p.rows ? `${p.rows}` : "1fr")};
  grid-template-columns: ${(p) => (p.columns && `${p.columns}`) || "1fr"};
`;

export const StyledFormRadioWrapper = styled.div<GridProps>`
display: flex;
flex-wrap: wrap;

& > label:not(:last-child){
margin-right: 2rem;
}
  /* display: grid;
  column-gap: 2rem;

  grid-auto-flow: column;
  grid-template-columns: ${(p) => (p.columns && `${p.columns}`) || "1fr"}; */
`;
