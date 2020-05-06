import styled from "styled-components/macro";

export const StyledLanding = styled.div`
  width: 40rem;
  min-height: 52rem;

  padding: 1rem 2rem;

  display: grid;
  row-gap: 4rem;
  align-content: start;

  border-radius: 3px;
  background-color: var(--color-bg-primary);
  box-shadow: 0 1px 2px var(--color-shadow-primary);

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 3px;

    background-color: var(--color-primary);
  }
`;
