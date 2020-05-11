import styled from "styled-components/macro";

type InputProps = { isLabeled?: boolean };

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 4rem;

  padding: 1.2rem;
  padding-bottom: 1.1rem;

  font-weight: 500;
  color: var(--color-heading-text);

  outline: none;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  border-color: ${(p) =>
    !p.isLabeled ? "var(--color-border-primary)" : "var(--color-bg-tertiary)"};

  background-color: ${(p) =>
    p.disabled ? "var(--color-bg-secondary)" : "var(--color-bg-tertiary)"};

  &[type="date"] {
    &::-webkit-datetime-edit-text {
      margin: 0 0.4rem;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-clear-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
    }
  }

  &::placeholder {
    color: var(--color-disabled-text);
    text-transform: capitalize;
    font-weight: 400;
  }
`;

export const StyledInputLabel = styled.label`
  width: max-content;

  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;

  & > span {
    color: var(--color-primary);
    margin-left: 4px;
  }

  & > i {
    font-weight: 500;
    margin-left: 4px;
  }
`;

export const StyledInputUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 0;
  height: 0.2rem;

  margin: auto;

  opacity: 0;

  background-color: var(--color-primary);

  transition: opacity 120ms ease-out, width 0s 180ms;
`;

export const StyledInputBox = styled.div`
  width: 100%;
  height: max-content;

  position: relative;

  border-radius: 0.3rem;
  overflow: hidden;

  display: flex;
  flex-direction: column-reverse;

  ${StyledInput}:focus ~ ${StyledInputUnderline} {
    opacity: 1;
    width: 100%;
    transition: width 120ms ease-out, opacity 120ms ease-in;
  }

  ${StyledInput}:focus ~ ${StyledInputLabel} {
    color: var(--color-primary);
  }

  ${StyledInput}:disabled ~ ${StyledInputLabel} {
    color: var(--color-disabled-text);
  }
`;
