import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { LandingWrapper } from "routes/Landing";

type Props = {} & RouteComponentProps;

const ChristianEd: React.FC<Props> = () => {
  return <LandingWrapper></LandingWrapper>;
};

export default ChristianEd;
