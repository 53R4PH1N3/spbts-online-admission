import styled from "styled-components/macro";

export const StyledCtaWrapper = styled.div`
  width: 100%;

  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const StyledCtaButton = styled.button`
  width: 24rem;
  height: 16rem;

  font-size: 2rem;
  color: var(--color-heading-text);

  border-radius: 3px;
  border: 1px solid var(--color-border-primary);
  background-color: var(--color-bg-tertiary);
  box-shadow: 0 0 0 0 rgba(var(--color-secondary-rgb), 0.16);

  transition: all 160ms ease;

  &:hover {
    color: var(--color-bg-primary);
    border-color: var(--color-secondary);
    background-color: var(--color-secondary);
    box-shadow: 0 0 0 4px rgba(var(--color-secondary-rgb), 0.16);
  }

  &:active {
    box-shadow: 0 0 0 8px rgba(var(--color-secondary-rgb), 0.24);
  }
`;
