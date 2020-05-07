import styled from "styled-components/macro";

export const StyledLandingLogoWrapper = styled.div`
  width: 100%;

  display: grid;
  column-gap: 2.4rem;
  grid-template-columns: max-content 1fr;
  align-items: center;

  user-select: none;

  position: relative;

  &::after {
    content: "";
    position: absolute;

    left: 0;
    bottom: 0;

    margin-bottom: -0.8rem;

    width: 100%;
    height: 1px;

    background-color: var(--color-border-primary);
  }
`;

export const StyledLandingLogo = styled.img`
  width: 8rem;
  height: 8rem;

  margin: 0.8rem 0;
`;

export const StyledLandingSchoolName = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Lora", serif;
`;
