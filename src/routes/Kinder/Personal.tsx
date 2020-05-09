import React, { useCallback, useEffect } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledBasicEdPersonalFieldWrapper,
} from "styles";
import { InputWrapper, Input, SelectOptionProps, Select } from "components";
import { PersonalProps } from "routes";
import { useForm } from "hooks";

const genderTypes: SelectOptionProps[] = [{ text: "Male" }, { text: "Female" }];

const initialValues: PersonalProps = {
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
};

type Props = {
  getValues?: (values: PersonalProps) => void;
};

const PersonalInformation: React.FC<Props> = ({ getValues }) => {
  const { values, setValues, handleOnChange } = useForm<PersonalProps>({
    initialValues,
  });

  const getGenderValue = useCallback(
    (value) => {
      setValues((prevState) => ({
        ...prevState,
        gender: value,
      }));
    },
    [setValues]
  );

  const getParentsAnnualIncome = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        parentsAnnualIncome: {
          ...prevState.parentsAnnualIncome,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const getParentsInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        parentsInfo: {
          ...prevState.parentsInfo,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  useEffect(() => {
    if (getValues) {
      getValues(values);
    }
    // eslint-disable-next-line
  }, [values]);

  return (
    <StyledTheologySection>
      <StyledTheologySectionHeader>
        <h2>Personal Information</h2>
      </StyledTheologySectionHeader>

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
            value={values.firstName}
            onChange={handleOnChange}
          />
          <Input
            label="Last Name"
            id="last-name"
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
          <Input
            label="Middle Name"
            id="middle-name"
            name="middleName"
            value={values.middleName}
            onChange={handleOnChange}
          />
          <Input
            label="Suffix"
            placeholder="Ex. Jr / Sr"
            id="suffix"
            required={false}
            name="suffix"
            value={values.suffix}
            onChange={handleOnChange}
          />
        </InputWrapper>

        <InputWrapper
          heading="Gender"
          id="gender-status"
          columns="repeat(3, 1fr)"
        >
          <Select
            label="gender"
            options={genderTypes}
            getSelectValue={(value) => {
              getGenderValue(value);
            }}
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
            value={values.birthPlace}
            onChange={handleOnChange}
          />
          <Input
            type="date"
            label="birth date"
            id="birth-date"
            name="birthDate"
            value={values.birthDate}
            onChange={handleOnChange}
          />
          <Input
            type="number"
            label="age"
            id="age"
            name="age"
            value={values.age}
            onChange={handleOnChange}
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
            value={values.nationality}
            onChange={handleOnChange}
          />
          <Input
            label="dialect"
            id="dialect"
            name="dialect"
            value={values.dialect}
            onChange={handleOnChange}
          />
          <Input
            label="ethnic affiliation"
            placeholder="Ex. Cebuano / Muslim / etc."
            id="ethnic"
            name="ethnicAffiliation"
            value={values.ethnicAffiliation}
            onChange={handleOnChange}
          />
          <Input
            label="religion"
            placeholder="Ex. Southern Baptist / Alliance / Pentecostal / Etc.."
            id="religion"
            name="religion"
            value={values.religion}
            onChange={handleOnChange}
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
            value={values.contactNumber}
            onChange={handleOnChange}
          />
          <Input
            type="email"
            label="email address"
            id="email"
            name="emailAddress"
            value={values.emailAddress}
            onChange={handleOnChange}
          />
          <Input
            label="facebook account"
            id="facebook-account"
            name="facebookAccount"
            value={values.facebookAccount}
            onChange={handleOnChange}
          />
          <Input
            label="permanent address"
            placeholder="complete permanent address"
            id="permanent-address"
            name="homeAddress"
            value={values.homeAddress}
            onChange={handleOnChange}
          />
        </InputWrapper>

        <InputWrapper
          heading="Parent's Annual Income"
          id="parents-income"
          columns="repeat(2, 1fr)"
        >
          <Input
            label="Annual Income"
            id="parents-annual-income"
            name="annualIncome"
            value={values.parentsAnnualIncome.annualIncome}
            onChange={getParentsAnnualIncome}
          />
          <Input
            label="Other Income"
            placeholder="please specify"
            id="parents-other-income"
            name="otherIncome"
            value={values.parentsAnnualIncome.otherIncome}
            onChange={getParentsAnnualIncome}
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
            value={values.parentsInfo.fathersName}
            onChange={getParentsInfo}
          />
          <Input
            label="occupation"
            placeholder="occupation"
            id="fathers-occupation"
            name="fathersOccupation"
            value={values.parentsInfo.fathersOccupation}
            onChange={getParentsInfo}
          />
          <Input
            label="mother's name"
            placeholder="mother's complete name"
            id="mothers-name"
            name="mothersName"
            value={values.parentsInfo.mothersName}
            onChange={getParentsInfo}
          />
          <Input
            label="occupation"
            placeholder="occupation"
            id="mothers-occupation"
            name="mothersOccupation"
            value={values.parentsInfo.mothersOccupation}
            onChange={getParentsInfo}
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
            value={values.scholarship}
            onChange={handleOnChange}
          />
          <Input
            type="number"
            label="amount"
            id="amount"
            name="scholarshipAmmout"
            value={values.scholarshipAmmout}
            onChange={handleOnChange}
          />
        </InputWrapper>
      </StyledBasicEdPersonalFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(PersonalInformation);
