import styled from "styled-components/macro";

export const StyledCheckboxBox = styled.span`
  width: 1.25em;
  height: 1.25em;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  margin-right: 8px;

  border-radius: 3px;
  border: 2px solid var(--color-border-secondary);
  background-color: var(--color-bg-tertiary);

  box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.16);

  transition: var(--transition-primary);

  &::after {
    content: "";

    height: 5px;
    width: 10px;

    margin-top: -2px;

    border-left: 2px solid;
    border-bottom: 2px solid;

    border-color: transparent;

    transform: rotate(-45deg) scale(0);
    transition: var(--transition-primary);
  }
`;

export const StyledCheckboxLabel = styled.span`
  height: max-content;

  transition: var(--transition-primary);
  padding: 0.8rem 0;
`;

export const StyledCheckbox = styled.label<{ disabled?: boolean }>`
  height: max-content;

  & > input {
    display: none;
  }

  & > input:checked + ${StyledCheckboxBox} {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }

  & > input:checked + ${StyledCheckboxBox}::after {
    border-color: var(--color-bg-primary);
    transform: rotate(-45deg) scale(1);
  }

  & > input:checked ~ ${StyledCheckboxLabel} {
    color: var(--color-primary);
  }

  &:active ${StyledCheckboxBox} {
    box-shadow: ${(p) =>
      p.disabled
        ? "0 0 0 0.4rem rgba(var(--color-primary-rgb), 0)"
        : "0 0 0 0.4rem rgba(var(--color-primary-rgb), 0.16)"};
  }

  &:hover ${StyledCheckboxLabel} {
    color: ${(p) =>
      p.disabled ? "var(--color-disabled-text)" : "var(--color-primary)"};
  }

  ${StyledCheckboxLabel} {
    color: ${(p) => p.disabled && "var(--color-disabled-text)"};
  }

  display: inline-flex;
  align-items: center;

  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;

  user-select: none;
`;
