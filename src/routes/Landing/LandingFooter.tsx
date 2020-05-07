import React from "react";
import { StyledLandingFooter } from "styles";

type Props = {};

const LandingFooter: React.FC<Props> = () => {
  return (
    <StyledLandingFooter>
      SPBTS © {new Date().getFullYear()}
    </StyledLandingFooter>
  );
};

export default React.memo(LandingFooter);
