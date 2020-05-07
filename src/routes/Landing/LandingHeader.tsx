import React from "react";
import {
  StyledLandingHeader,
  StyledLandingHeading,
  StyledLandingSubHeading,
} from "styles";

type Props = {
  heading: string;
  subHeading?: string;
};

const LandingHeader: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <StyledLandingHeader>
      <StyledLandingHeading>{heading}</StyledLandingHeading>
      <StyledLandingSubHeading>{subHeading}</StyledLandingSubHeading>
    </StyledLandingHeader>
  );
};

export default React.memo(LandingHeader);
