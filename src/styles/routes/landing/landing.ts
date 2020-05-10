import styled from "styled-components/macro";
import media from "styles/media";

export const StyledLanding = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLandingContainer = styled.main`
  width: 40rem;
  min-height: 48rem;

  padding: 1rem 3.2rem;

  display: grid;
  grid-template-rows: repeat(3, max-content) 1fr;
  row-gap: 4rem;
  align-content: start;

  border-radius: 3px;
  background-color: var(--color-bg-primary);
  box-shadow: 0 1px 2px var(--color-shadow-primary);

  position: relative;
  overflow: hidden;

  ${media.mobileLg} {
    width: 100%;
    height: 100%;
    min-height: calc(100vh + 4rem);

    border-radius: 0;
  }

  ${media.mobileSm} {
    padding: 1rem 2rem;
  }

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
