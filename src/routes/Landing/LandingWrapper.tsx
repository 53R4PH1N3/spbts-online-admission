import React from "react";
import { StyledLanding, StyledLandingContainer } from "styles";
import { LandingLogo, LandingFooter } from ".";

type Props = {
  children?: React.ReactNode;
};

const LandingWrapper: React.FC<Props> = ({ children }) => {
  return (
    <StyledLanding>
      <StyledLandingContainer>
        <LandingLogo />
        {children}
        <LandingFooter />
      </StyledLandingContainer>
    </StyledLanding>
  );
};

export default React.memo(LandingWrapper);
