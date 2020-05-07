import React from "react";
import logo from "assets/images/logo.jpg";
import {
  StyledLandingLogoWrapper,
  StyledLandingLogo,
  StyledLandingSchoolName,
} from "styles";

type Props = {};

const LandingLogo: React.FC<Props> = () => {
  return (
    <StyledLandingLogoWrapper>
      <StyledLandingLogo src={logo} />
      <StyledLandingSchoolName>
        Southern Philippine Baptist Theological Seminary, Inc.
      </StyledLandingSchoolName>
    </StyledLandingLogoWrapper>
  );
};

export default React.memo(LandingLogo);
