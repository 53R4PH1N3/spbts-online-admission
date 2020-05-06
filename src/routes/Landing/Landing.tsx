import React from "react";
import {
  StyledLanding,
  StyledLandingLogoWrapper,
  StyledLandingSchoolName,
  StyledLandingLogo,
  StyledLandingHeader,
  StyledLandingHeading,
  StyledLandingSubHeading,
} from "styles";

import logo from "assets/images/logo.png";

type Props = {};

const Landing: React.FC<Props> = () => {
  return (
    <StyledLanding>
      <StyledLandingLogoWrapper>
        <StyledLandingLogo src={logo} />
        <StyledLandingSchoolName>
          Southern Philippine Baptist Theological Seminary, Inc.
        </StyledLandingSchoolName>
      </StyledLandingLogoWrapper>

      <StyledLandingHeader>
        <StyledLandingHeading>Online Admission</StyledLandingHeading>
        <StyledLandingSubHeading>
          Please identify yourself with the following options.
        </StyledLandingSubHeading>
      </StyledLandingHeader>
    </StyledLanding>
  );
};

export default Landing;
