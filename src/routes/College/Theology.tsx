import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  StyledTheology,
  StyledForm,
  StyledFormHeader,
  StyledTheologyContainer,
  StyledButtonPrimary,
  StyledTheologySubmitSection,
  StyledPersonalFieldWrapper,
  StyledTheologySection,
  StyledTheologySectionHeader,
} from "styles";
import { Navigation, SVG, InputWrapper, Input } from "components";

import {
  EnrolleeStatusProps,
  PersonalProps,
  EducationalProps,
  TestimonyProps,
} from "routes";

type Props = {} & RouteComponentProps;

type TheologyTypes = EnrolleeStatusProps &
  PersonalProps &
  EducationalProps &
  TestimonyProps;

const Theology: React.FC<Props> = () => {
  const { register, errors, watch, handleSubmit } = useForm<TheologyTypes>();

  const onFormSubmit = (data: TheologyTypes) => {
    console.log(data);
  };

  return (
    <StyledTheology>
      <Navigation />

      <StyledTheologyContainer>
        <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
          <StyledFormHeader>
            <h1>Pre-Admission Form</h1>
            <p>
              Please fill all necessary information with love and with all your
              honesty.
            </p>
          </StyledFormHeader>

          <StyledTheologySection>
            <StyledTheologySectionHeader>
              <h2>Personal Information</h2>
            </StyledTheologySectionHeader>
            <StyledPersonalFieldWrapper>
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
                heading="Gender & Status"
                id="gender-status"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="gender"
                  name="gender"
                  ref={register({ required: true })}
                  error={errors.gender && "gender is required"}
                />
                <Input
                  label="civil status"
                  name="civilStatus"
                  ref={register({ required: true })}
                  error={errors.civilStatus && "gender is required"}
                />

                {watch("civilStatus")?.toLocaleLowerCase() === "married" && (
                  <Input
                    label="Spouse Name"
                    placeholder="Complete Name"
                    id="spouse-name"
                    name="spouseName"
                    ref={register({
                      required:
                        watch("civilStatus")?.toLocaleLowerCase() === "married",
                    })}
                    error={errors.spouseName && "spouse name is required"}
                  />
                )}
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
                />
                <Input label="dialect" id="dialect" name="dialect" />
                <Input
                  label="ethnic affiliation"
                  placeholder="Ex. Cebuano / etc."
                  id="ethnic"
                  name="ethnicAffiliation"
                />
                <Input
                  label="religion"
                  placeholder="Ex. Southern Baptist / Etc.."
                  id="religion"
                  name="religion"
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
                />
                <Input
                  type="email"
                  label="email address"
                  id="email"
                  name="emailAddress"
                />
                <Input
                  label="facebook account"
                  id="facebook-account"
                  name="facebookAccount"
                />
                <Input
                  label="home address"
                  id="home-address"
                  name="homeAddress"
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
                  name="annualIncome"
                  ref={register({ required: true })}
                  // TODO: refractor object
                  error={
                    errors.parentsAnnualIncome?.annualIncome &&
                    "annual income is required"
                  }
                />
                <Input
                  label="Other Income"
                  placeholder="please specify"
                  id="parents-other-income"
                  name="otherIncome"
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
                  name="fathersName"
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="fathers-occupation"
                  name="fathersOccupation"
                />
                <Input
                  label="mother's name"
                  placeholder="mother's complete name"
                  id="mothers-name"
                  name="mothersName"
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="mothers-occupation"
                  name="mothersOccupation"
                />
              </InputWrapper>

              <InputWrapper
                heading={
                  <>
                    Person Supporting You <span>( Other than parents )</span>
                  </>
                }
                id="person-supporting"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="complete name"
                  id="other-supporter-name"
                  name="completeName"
                />
                <Input
                  label="occupation"
                  id="other-supporter-occupation"
                  name="occupation"
                />
                <Input
                  label="address"
                  id="other-supporter-address"
                  name="address"
                />
                <Input
                  label="relationship"
                  id="other-supporter-relationship"
                  name="relationship"
                />
              </InputWrapper>

              <InputWrapper
                heading="Church Information"
                id="church-information"
                columns="repeat(6, 1fr)"
              >
                <Input label="church name" id="church-name" name="churchName" />
                <Input
                  type="date"
                  label="date baptized"
                  id="date-baptized"
                  name="dateBaptized"
                />
                <Input
                  label="church address"
                  id="church-address"
                  name="churchAddress"
                />
                <Input
                  label="association"
                  id="association"
                  name="association"
                />
                <Input
                  label="church pastor name"
                  placeholder="church pastor complete name"
                  id="church-pastor"
                  name="churchPastorName"
                />
                <Input
                  type="number"
                  label="pastor contact number"
                  placeholder="contact number"
                  id="church-pastor-contact-number"
                  name="churchPastorContactNumber"
                />
              </InputWrapper>
            </StyledPersonalFieldWrapper>
          </StyledTheologySection>

          <StyledTheologySubmitSection>
            <StyledButtonPrimary type="submit">
              Submit Form
              <SVG icon="send" />
            </StyledButtonPrimary>
          </StyledTheologySubmitSection>
        </StyledForm>
      </StyledTheologyContainer>
    </StyledTheology>
  );
};

export default Theology;
