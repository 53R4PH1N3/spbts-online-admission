import React, { useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  StyledTheology,
  StyledForm,
  StyledFormHeader,
  StyledTheologyContainer,
  StyledTheologyCheckboxWrapper,
  StyledTheologySubmitSection,
  StyledButtonPrimary,
} from "styles";
import { Navigation, Checkbox, SVG } from "components";
import { EnrolleeStatusProps, PersonalProps, EducationalProps } from "routes";

import EnrolleeStatus from "./EnrolleeStatus";
import PersonalInformation from "./Personal";
import EducationalBackground from "./Educational";

type Props = {} & RouteComponentProps;

const state: EnrolleeStatusProps & PersonalProps & EducationalProps = {
  // EnrolleeStatus
  typeOfStudent: "",
  schoolYear: {
    from: "",
    to: "",
  },
  lastSchoolYearAttended: {
    from: "",
    to: "",
  },
  educationLevel: "",
  gradeLevel: "",
  section: "",

  // Personal Information
  firstName: "",
  lastName: "",
  middleName: "",
  suffix: "",

  gender: "",

  birthPlace: "",
  birthDate: "",
  age: "",

  nationality: "",
  dialect: "",
  ethnicAffiliation: "",
  religion: "",

  contactNumber: "",
  emailAddress: "",
  facebookAccount: "",
  homeAddress: "",

  parentsAnnualIncome: {
    annualIncome: "",
    otherIncome: "",
  },

  parentsInfo: {
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
  },

  scholarship: "",
  scholarshipAmmout: "",

  // Educational Information
  authorizedPersons: {
    person1Name: "",
    person1Relationship: "",
    person2Name: "",
    person2Relationship: "",
  },
};

const KinderGarden: React.FC<Props> = () => {
  const [isCertifyTrue, setCertifyTrue] = useState(false);

  const [values, setValues] = useState<typeof state>(state);

  const getAllDataCallback = useCallback((values) => {
    setValues((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  const getCheckboxValue = useCallback(() => {
    setCertifyTrue((prevState) => !prevState);
  }, []);

  const onSubmitAction = useCallback(() => {
    console.log(values);
  }, [values]);

  return (
    <StyledTheology>
      <Navigation />

      <StyledTheologyContainer>
        <StyledForm>
          <StyledFormHeader>
            <h1>Admission Form</h1>
            <p>
              Please fill all necessary information with love and with all your
              honesty.
            </p>
          </StyledFormHeader>

          <EnrolleeStatus getValues={getAllDataCallback} />

          <PersonalInformation getValues={getAllDataCallback} />

          <EducationalBackground getValues={getAllDataCallback} />

          <StyledTheologyCheckboxWrapper>
            <Checkbox
              label="I certify that all information stated and written above are true and correct. With my consent, I agree that the information and data provided will be used only for whatever legal purposes, do hereby promulgated. [ Section 16 R.A. 10173, known as Data Privacy Act of 2012 ]."
              id="certify"
              containerId="certify-checkbox"
              onChange={getCheckboxValue}
            />
          </StyledTheologyCheckboxWrapper>

          <StyledTheologySubmitSection>
            <StyledButtonPrimary
              type="button"
              disabled={!isCertifyTrue}
              onClick={onSubmitAction}
            >
              Submit Form
              <SVG icon="send" />
            </StyledButtonPrimary>
          </StyledTheologySubmitSection>
        </StyledForm>
      </StyledTheologyContainer>
    </StyledTheology>
  );
};

export default KinderGarden;
