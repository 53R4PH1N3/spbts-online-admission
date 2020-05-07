import styled, { css } from "styled-components/macro";

export const ButtonStyles = css`
  min-width: max-content;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.6rem;

  border-radius: 0.3rem;
  border: 1px solid var(--color-border-primary);
  background-color: transparent;

  font-weight: 500;

  outline: none;
  user-select: none;

  box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.16);

  transition: var(--transition-primary);

  & > svg {
    margin-left: -0.8rem;
    margin-right: 0.8rem;
  }
`;

export const StyledButtonNormal = styled.button`
  ${ButtonStyles};
  box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.16);

  &:hover,
  &:focus {
    color: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.16);
  }

  &:active {
    box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.16);
  }
`;

export const StyledButtonPrimary = styled.button`
  ${ButtonStyles};

  color: var(--color-bg-primary);
  border-color: var(--color-primary);
  background-color: var(--color-primary);
`;

export const StyledButtonSecondary = styled.button`
  ${ButtonStyles};

  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: var(--color-bg-primary);
`;

type CompactButton = { use?: "primary" | "secondary" | "danger" };

export const StyledButtonCompact = styled.button.attrs(() => ({
  type: "button",
}))<CompactButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem;

  border-radius: 0.3rem;
  border: 1px solid var(--color-border-secondary);
  color: var(--color-body-text);
  background-color: var(--color-bg-tertiary);

  font-weight: 500;

  outline: none;
  user-select: none;

  transition: var(--transition-primary);

  &:hover,
  &:focus {
    color: ${(p) =>
      (p.use === "primary" && "var(--color-primary)") ||
      (p.use === "danger" && "var(--color-error)") ||
      "var(--color-primary)"};
  }
`;
