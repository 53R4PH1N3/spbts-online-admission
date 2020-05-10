import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  StyledTheology,
  StyledFormHeader,
  StyledTheologyContainer,
  StyledBasicEdPersonalFieldWrapper,
  StyledBasicEdFieldWrapper,
  StyledBasicEdEducationalFieldWrapper,
  StyledTheologyCheckboxWrapper,
  StyledTheologyCheckboxError,
} from "styles";
import {
  Navigation,
  InputWrapper,
  Input,
  RadioWrapper,
  Radio,
  Form,
  Checkbox,
} from "components";

import {
  EnrolleeStatusProps,
  PersonalProps,
  EducationalProps,
  TestimonyProps,
  SectionContainer,
} from "routes";

type Props = {} & RouteComponentProps;

type BasicEdTypes = EnrolleeStatusProps &
  PersonalProps &
  EducationalProps &
  TestimonyProps;

const Kinder: React.FC<Props> = () => {
  const { register, errors, setValue, handleSubmit } = useForm<BasicEdTypes>();

  const onFormSubmit = (data: BasicEdTypes) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("educationLevel", "Kinder 2");
  }, [setValue]);

  return (
    <StyledTheology>
      <Navigation />

      <StyledTheologyContainer>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <StyledFormHeader>
            <h1>Pre-Admission Form</h1>
            <p>
              Please fill all necessary information with love and with all your
              honesty.
            </p>
          </StyledFormHeader>

          <SectionContainer heading="Enrollee Status">
            <StyledBasicEdFieldWrapper>
              <RadioWrapper
                id="type-of-student"
                heading="What type student are you?"
                error={errors.typeOfStudent && "Student Types is Required!"}
              >
                <Radio
                  label="New Student"
                  name="typeOfStudent"
                  value="New Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Returning Student"
                  name="typeOfStudent"
                  value="Returning Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Current Student"
                  name="typeOfStudent"
                  value="Current Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Transferee"
                  name="typeOfStudent"
                  value="Transferee"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Foreigner"
                  name="typeOfStudent"
                  value="Foreigner"
                  ref={register({ required: true })}
                />
              </RadioWrapper>

              <InputWrapper
                heading="School Year"
                id="school-year"
                columns="repeat(2, 1fr)"
              >
                <Input
                  type="number"
                  label="From"
                  placeholder="year"
                  id="from-year"
                  name="schoolYear.from"
                  ref={register({ required: true })}
                  error={errors.schoolYear?.from && "from year is required"}
                />
                <Input
                  type="number"
                  label="To"
                  placeholder="year"
                  id="to-year"
                  name="schoolYear.to"
                  ref={register({ required: true })}
                  error={errors.schoolYear?.to && "to year is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Last School Year Attended"
                id="last-school-year"
                columns="repeat(2, 1fr)"
              >
                <Input
                  type="number"
                  label="From"
                  placeholder="year"
                  id="last-from-year"
                  name="lastSyFromYear"
                  ref={register({ required: true })}
                  error={errors.lastSyFromYear && "This field is required"}
                />
                <Input
                  type="number"
                  label="To"
                  placeholder="year"
                  id="last-to-year"
                  name="lastSyToYear"
                  ref={register({ required: true })}
                  error={errors.lastSyToYear && "This field is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Current Education"
                id="desired-course"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="Education Level"
                  id="course-name"
                  name="educationLevel"
                  ref={register({ required: true })}
                  error={errors.educationLevel && "education level is required"}
                  readOnly
                />
                <Input
                  type="number"
                  id="grade-level"
                  label="grade level"
                  name="gradeLevel"
                  ref={register({ required: true })}
                  error={errors.gradeLevel && "grade level is required"}
                />
                <Input
                  label="Section"
                  id="section"
                  name="section"
                  ref={register({ required: true })}
                  error={errors.section && "section is required"}
                />
              </InputWrapper>
            </StyledBasicEdFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Personal Information">
            <StyledBasicEdPersonalFieldWrapper>
              <InputWrapper
                heading="Full Name"
                id="full-name"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="First Name"
                  id="first-name"
                  name="firstName"
                  ref={register({ required: true })}
                  error={errors.firstName && "first name is required"}
                />
                <Input
                  label="Last Name"
                  id="last-name"
                  name="lastName"
                  ref={register({ required: true })}
                  error={errors.lastName && "last name is required"}
                />
                <Input
                  label="Middle Name"
                  id="middle-name"
                  name="middleName"
                  ref={register({ required: true })}
                  error={errors.middleName && "middle name is required"}
                />
                <Input
                  label="Suffix"
                  placeholder="Ex. Jr / Sr"
                  id="suffix"
                  required={false}
                  name="suffix"
                  ref={register}
                />
              </InputWrapper>

              <InputWrapper
                heading="Gender"
                id="gender-status"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="gender"
                  name="gender"
                  ref={register({ required: true })}
                  error={errors.gender && "gender is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Birth Information"
                id="birth-info"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="birth place"
                  id="birth-place"
                  name="birthPlace"
                  ref={register({ required: true })}
                  error={errors.birthPlace && "birth place is required"}
                />
                <Input
                  type="date"
                  label="birth date"
                  id="birth-date"
                  name="birthDate"
                  ref={register({ required: true })}
                  error={errors.birthDate && "birth date is required"}
                />
                <Input
                  type="number"
                  label="age"
                  id="age"
                  name="age"
                  ref={register({ required: true })}
                  error={errors.age && "age is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Nationalism"
                id="nationalism"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="nationality"
                  id="nationality"
                  name="nationality"
                  ref={register({ required: true })}
                  error={errors.nationality && "nationality is required"}
                />
                <Input
                  label="dialect"
                  id="dialect"
                  name="dialect"
                  ref={register({ required: true })}
                  error={errors.dialect && "dialect is required"}
                />
                <Input
                  label="ethnic affiliation"
                  placeholder="Ex. Cebuano / etc."
                  id="ethnic"
                  name="ethnicAffiliation"
                  ref={register({ required: true })}
                  error={
                    errors.ethnicAffiliation && "ethnicAffiliation is required"
                  }
                />
                <Input
                  label="religion"
                  placeholder="Ex. Southern Baptist / Etc.."
                  id="religion"
                  name="religion"
                  ref={register({ required: true })}
                  error={errors.religion && "religion is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Contact Information"
                id="contact-information"
                columns="repeat(3, 1fr)"
              >
                <Input
                  type="number"
                  label="contact number"
                  id="contact-number"
                  name="contactNumber"
                  ref={register({ required: true })}
                  error={errors.contactNumber && "contactNumber is required"}
                />
                <Input
                  type="email"
                  label="email address"
                  id="email"
                  name="emailAddress"
                  ref={register({ required: true })}
                  error={errors.emailAddress && "emailAddress is required"}
                />
                <Input
                  label="facebook account"
                  id="facebook-account"
                  name="facebookAccount"
                  ref={register({ required: true })}
                  error={
                    errors.facebookAccount && "facebookAccount is required"
                  }
                />
                <Input
                  label="home address"
                  id="home-address"
                  name="homeAddress"
                  ref={register({ required: true })}
                  error={errors.homeAddress && "homeAddress is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Parent's / Family Annual Income"
                id="parents-income"
                columns="repeat(2, 1fr)"
              >
                <Input
                  label="Annual Income"
                  id="parents-annual-income"
                  name="parentsAnnualIncome.annualIncome"
                  ref={register({ required: true })}
                  error={
                    errors.parentsAnnualIncome?.annualIncome &&
                    "annual income is required"
                  }
                />
                <Input
                  label="Other Income"
                  placeholder="please specify"
                  id="parents-other-income"
                  name="parentsAnnualIncome.otherIncome"
                  ref={register}
                  required={false}
                />
              </InputWrapper>

              <InputWrapper
                heading="Parent's Information"
                id="parent-information"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="father's name"
                  placeholder="father's complete name"
                  id="fathers-name"
                  name="parentsInfo.fathersName"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.fathersName &&
                    "father's name is required"
                  }
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="fathers-occupation"
                  name="parentsInfo.fathersOccupation"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.fathersOccupation &&
                    "occupation is required"
                  }
                />
                <Input
                  label="mother's name"
                  placeholder="mother's complete name"
                  id="mothers-name"
                  name="parentsInfo.mothersName"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.mothersName &&
                    "mother's name is required"
                  }
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="mothers-occupation"
                  name="parentsInfo.mothersOccupation"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.mothersOccupation &&
                    "occupation is required"
                  }
                />
              </InputWrapper>

              <InputWrapper
                heading="Scholarship Information"
                id="scholarship-info"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="scholarship"
                  id="scholarship"
                  name="scholarship"
                  ref={register({ required: true })}
                  error={errors.scholarship && "scholarship is required"}
                />
                <Input
                  type="number"
                  label="amount"
                  id="amount"
                  name="scholarshipAmmout"
                  ref={register({ required: true })}
                  error={
                    errors.scholarshipAmmout &&
                    "scholarship ammount is required"
                  }
                />
              </InputWrapper>
            </StyledBasicEdPersonalFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Educational Background">
            <StyledBasicEdEducationalFieldWrapper>
              <InputWrapper
                heading="Authorized person/s to have an access your school records"
                id="authorized-persons"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="complete name"
                  id="authorized-person-name-1"
                  name="authorizedPerson1Name"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson1Name && "this field is required"
                  }
                />
                <Input
                  label="relationship"
                  id="authorized-person-relationship-1"
                  name="authorizedPerson1Relationship"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson1Relationship &&
                    "this field is required"
                  }
                />
                <Input
                  label="complete name"
                  id="authorized-person-name-2"
                  name="authorizedPerson2Name"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson2Name && "this field is required"
                  }
                />
                <Input
                  label="relationship"
                  id="authorized-person-relationship-2"
                  name="authorizedPerson2Relationship"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson2Relationship &&
                    "this field is required"
                  }
                />
              </InputWrapper>
            </StyledBasicEdEducationalFieldWrapper>
          </SectionContainer>

          <StyledTheologyCheckboxWrapper
            error={errors.certifyTrue ? true : false}
          >
            <Checkbox
              label="I certify that all information stated and written above are true and correct. With my consent, I agree that the information and data provided will be used only for whatever legal purposes, do hereby promulgated. [ Section 16 R.A. 10173, known as Data Privacy Act of 2012 ]."
              id="certify"
              containerId="certify-checkbox"
              name="certifyTrue"
              ref={register({ required: true })}
            />
            {errors.certifyTrue && (
              <StyledTheologyCheckboxError>
                This field is required!
              </StyledTheologyCheckboxError>
            )}
          </StyledTheologyCheckboxWrapper>
        </Form>
      </StyledTheologyContainer>
    </StyledTheology>
  );
};

export default Kinder;
