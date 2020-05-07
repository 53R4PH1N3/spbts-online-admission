import React from "react";
import {
  StyledTheologyEducational,
  StyledEducationalHeader,
  StyledPersonalFieldWrapper,
} from "styles";
import { InputWrapper, Input, SelectOptionProps, Select } from "components";

const genderTypes: SelectOptionProps[] = [{ text: "Male" }, { text: "Female" }];

const civilStatus: SelectOptionProps[] = [
  { text: "Single" },
  { text: "Married" },
  { text: "Separated" },
];

type Props = {};

const PersonalInformation: React.FC<Props> = () => {
  const [isMarried, setMarried] = React.useState(false);

  return (
    <StyledTheologyEducational>
      <StyledEducationalHeader>
        <h2>Personal Information</h2>
      </StyledEducationalHeader>

      <StyledPersonalFieldWrapper>
        <InputWrapper
          heading="Full Name"
          id="full-name"
          columns="repeat(3, 1fr)"
        >
          <Input label="First Name" name="firstName" id="first-name" />
          <Input label="Last Name" name="lastName" id="last-name" />
          <Input label="Middle Name" name="middleName" id="middle-name" />
          <Input
            label="Suffix"
            placeholder="Ex. Jr / Sr"
            id="suffix"
            required={false}
            name="suffix"
          />
        </InputWrapper>

        <InputWrapper
          heading="Gender & Status"
          id="gender-status"
          columns="repeat(3, 1fr)"
        >
          <Select
            label="gender"
            options={genderTypes}
            getSelectValue={(value) => console.log(value)}
          />
          <Select
            label="civil status"
            options={civilStatus}
            getSelectValue={(value) => {
              if (value === "Married") {
                setMarried(true);
              }
            }}
          />

          {isMarried && (
            <Input
              label="Spouse Name"
              placeholder="Spouse Complete Name"
              name="spouseName"
            />
          )}
        </InputWrapper>

        <InputWrapper
          heading="Birth Information"
          id="birth-info"
          columns="repeat(3, 1fr)"
        >
          <Input label="birth place" name="birthPlace" id="birth-place" />
          <Input
            type="date"
            label="birth date"
            name="birthDate"
            id="birth-date"
          />
        </InputWrapper>

        <InputWrapper
          heading="Nationalism"
          id="nationalism"
          columns="repeat(3, 1fr)"
        >
          <Input label="nationality" name="nationality" id="nationality" />
          <Input label="dialect" name="dialect" id="dialect" />
          <Input
            label="ethnic affiliation"
            placeholder="Ex. Cebuano / Muslim / etc."
            name="ethnic"
            id="ethnic"
          />
          <Input label="religion" name="religion" id="religion" />
        </InputWrapper>

        <InputWrapper
          heading="Contact Information"
          id="contact-information"
          columns="repeat(3, 1fr)"
        >
          <Input
            type="number"
            label="contact number"
            name="contactNumber"
            id="contact-number"
          />
          <Input type="email" label="email address" name="email" id="email" />
          <Input
            label="facebook account"
            name="facebookAccount"
            id="facebook-account"
          />
          <Input label="home address" name="homeAddress" id="home-address" />
        </InputWrapper>

        <InputWrapper
          heading="Father's Information"
          id="father-information"
          columns="repeat(3, 1fr)"
        >
          <Input
            label="father's name"
            placeholder="father's complete name"
            name="fathersName"
            id="fathers-name"
          />
          <Input
            label="occupation"
            placeholder="occupation"
            name="fathersOccupation"
            id="fathers-occupation"
          />
        </InputWrapper>

        <InputWrapper
          heading="Mother's Information"
          id="mother-information"
          columns="repeat(3, 1fr)"
        >
          <Input
            label="mother's name"
            placeholder="mother's complete name"
            name="mothersName"
            id="mothers-name"
          />
          <Input
            label="occupation"
            placeholder="occupation"
            name="mothersOccupation"
            id="mothers-occupation"
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
            name="otherSupporterName"
            id="other-supporter-name"
          />
          <Input
            label="occupation"
            name="otherSupporterOccupation"
            id="other-supporter-occupation"
          />
          <Input
            label="address"
            name="otherSupporterAddress"
            id="other-supporter-address"
          />
          <Input
            label="relationship"
            name="otherSupporterRelationship"
            id="other-supporter-relationship"
          />
        </InputWrapper>

        <InputWrapper
          heading="Parent's Annual Income"
          id="parents-income"
          columns="repeat(2, 1fr)"
        >
          <Input
            label="Annual Income"
            name="parentsAnnualIncome"
            id="parents-annual-income"
          />
          <Input
            label="Other Income"
            placeholder="please specify"
            name="parentsOtherIncome"
            id="parents-other-income"
          />
        </InputWrapper>
      </StyledPersonalFieldWrapper>
    </StyledTheologyEducational>
  );
};

export default PersonalInformation;
