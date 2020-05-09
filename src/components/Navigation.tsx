import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import {
  StyledNav,
  StyledNavLogoWrapper,
  StyledNavLogo,
  StyledNavSchoolName,
  StyledNavBackButton,
} from "styles";

import logo from "assets/images/logo.jpg";
import { SVG } from "components";

type Props = {} & RouteComponentProps;

const Navigation: React.FC<Props> = ({ history }) => {
  return (
    <StyledNav>
      <StyledNavLogoWrapper to="/">
        <StyledNavLogo src={logo} />
        <StyledNavSchoolName>
          Southern Philippines Baptist Theological Seminary, Inc.
        </StyledNavSchoolName>
      </StyledNavLogoWrapper>

      <StyledNavBackButton onClick={() => history.goBack()}>
        <SVG icon="back" />
        <span>Back</span>
      </StyledNavBackButton>
    </StyledNav>
  );
};

export default React.memo(withRouter(Navigation));
