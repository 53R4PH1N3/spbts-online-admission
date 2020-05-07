import styled, { css } from "styled-components/macro";
import { StyledInputLabel, StyledInputUnderline } from "./input";

export const StyledSelectLabel = styled(StyledInputLabel)``;

export const StyledSelectedValue = styled.span`
  color: var(--color-heading-text);
  text-transform: capitalize;
  font-weight: 500;
`;

export const StyledSelectPlaceholder = styled.span``;

type SelectOption = {
  show?: boolean;
};

export const StyledSelectOption = styled.ul<SelectOption>`
  max-height: 11.7rem;

  overflow: hidden auto;

  list-style: none;

  background-color: var(--color-bg-primary);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.16);

  cursor: pointer;

  opacity: 0;
  visibility: hidden;
  transform: translateY(1rem);
  transition: var(--transition-primary);

  ${(p) =>
    p.show &&
    css`
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) !important;
    `}

  & > li {
    &:hover,
    &:focus > button {
      color: var(--color-primary);
      background-color: var(--color-bg-secondary);
    }

    & > button {
      width: 100%;
      height: 100%;

      padding: 1rem 1.2rem;

      text-align: start;
      text-transform: capitalize;

      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

export const StyledSelectOptionBox = styled.div`
  width: 100%;
  height: 0;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;

  animation: enterAnimation 120ms var(--transition-ease-primary);

  @keyframes enterAnimation {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledSelectButton = styled.button.attrs(() => ({
  type: "button",
}))`
  width: 100%;
  min-height: 4rem;

  padding: 0.8rem 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  outline: none;
  color: var(--color-disabled-text);
  text-transform: capitalize;

  border-radius: 0.3rem;
  border: 1px solid transparent;
  background-color: ${(p) =>
    p.disabled ? "var(--color-bg-secondary)" : "var(--color-bg-tertiary)"};
  box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.16);

  transition: var(--transition-primary);

  &:hover,
  &:focus {
    color: ${(p) =>
      p.disabled ? "var(--color-disabled-text)" : "var(--color-body-text)"};
  }

  &:focus {
    border-radius: 0.3rem 0.3rem 0 0;
  }
`;

export const StyledSelectBox = styled.div`
  width: 100%;
  height: max-content;

  position: relative;

  display: flex;
  flex-direction: column-reverse;


  &:focus-within {
    ${StyledSelectButton} ~ ${StyledInputUnderline} {
      opacity: 1;
      width: 100%;
      transition: width 150ms ease-out, opacity 120ms ease-in;
    }

    ${StyledSelectButton} ~ ${StyledSelectLabel} {
    color: var(--color-primary);
    }
  }

  ${StyledSelectButton}:disabled ~ ${StyledSelectLabel} {
    color: var(--color-disabled-text);
  }
`;
