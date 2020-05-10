import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Select, SelectOptionProps } from "components";
import { StyledLandingCtaWrapper } from "styles";

import LandingHeader from "./LandingHeader";
import LandingWrapper from "./LandingWrapper";

type Props = {} & RouteComponentProps;

const Landing: React.FC<Props> = ({ history }) => {
  const collegeOffers: SelectOptionProps[] = [
    {
      text: "Bachelor of Arts in Theology",
      onClick: () => history.push("/ab-theology"),
    },
    {
      text: "Bachelor of Arts in Christian Education",
      onClick: () => history.push("/ab-christian-education"),
    },
  ];
  const basicEdOffers: SelectOptionProps[] = [
    {
      text: "Kinder 2",
      onClick: () => history.push("/kinder-2"),
    },
    {
      text: "Elementary",
      onClick: () => history.push("/elementary"),
    },
    {
      text: "Junior High School",
      onClick: () => history.push("/junior-high"),
    },
    {
      text: "Senior High School",
      onClick: () => history.push("/senior-high"),
    },
  ];
  return (
    <LandingWrapper>
      <LandingHeader
        heading="Online Admission"
        subHeading="Please identify yourself with the following options."
      />
      <StyledLandingCtaWrapper>
        <Select label="College" options={collegeOffers} />
        <Select label="Basic Education" options={basicEdOffers} />
      </StyledLandingCtaWrapper>
    </LandingWrapper>
  );
};

export default Landing;
