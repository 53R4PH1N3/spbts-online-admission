import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  StyledTheology,
  StyledForm,
  StyledFormHeader,
  StyledTheologyContainer,
} from "styles";
import { Navigation } from "components";
import EducationalBackground from "./Educational";
import EnrolleeStatus from "./EnrolleeStatus";
import PersonalInformation from "./Personal";

type Props = {} & RouteComponentProps;

const Theology: React.FC<Props> = () => {
  return (
    <StyledTheology>
      <Navigation />

      <StyledTheologyContainer>
        <StyledForm>
          <StyledFormHeader>
            <h1>Pre-Admission Form</h1>
            <p>
              Please fill all necessary information with love and with all your
              honesty.
            </p>
          </StyledFormHeader>
          <PersonalInformation />
          <EducationalBackground />
          <EnrolleeStatus />
        </StyledForm>
      </StyledTheologyContainer>
    </StyledTheology>
  );
};

export default Theology;
