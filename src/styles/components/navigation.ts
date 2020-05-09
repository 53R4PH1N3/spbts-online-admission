import styled from "styled-components/macro";
import { StyledButtonNormal } from "./button";
import { Link } from "react-router-dom";
import media from "styles/media";

export const StyledNav = styled.nav`
  width: 100%;
  height: 7.2rem;

  padding: 0 6.4rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.laptopSm} {
    padding: 0 4.8rem;
  }

  ${media.tabletLg} {
    padding: 0 4rem;
  }

  ${media.tabletSm} {
    padding: 0 2.4rem;
  }

  ${media.mobileMd} {
    height: 8rem;
    padding: 0 2rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: var(--color-border-primary);
  }
`;

export const StyledNavLogo = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const StyledNavSchoolName = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Lora", serif;
  color: currentColor;

  ${media.mobileMd} {
    font-size: 1.4rem;
    width: 16rem;
  }
`;

export const StyledNavLogoWrapper = styled(Link)`
  width: 32rem;

  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr;
  column-gap: 1.2rem;

  color: var(--color-heading-text);

  user-select: none;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

export const StyledNavBackButton = styled(StyledButtonNormal)`
  ${media.tabletSm} {
    & > span {
      display: none;
    }

    & > svg {
      margin-right: -0.5rem;
    }
  }
`;
