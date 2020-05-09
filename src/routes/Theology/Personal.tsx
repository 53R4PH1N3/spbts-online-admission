import React, { useCallback, useEffect } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledPersonalFieldWrapper,
} from "styles";
import { InputWrapper, Input, SelectOptionProps, Select } from "components";
import { PersonalProps } from "routes";
import { useForm } from "hooks";

const genderTypes: SelectOptionProps[] = [{ text: "Male" }, { text: "Female" }];

const civilStatus: SelectOptionProps[] = [
  { text: "Single" },
  { text: "Married" },
  { text: "Separated" },
];

const initialValues: PersonalProps = {
  firstName: "",
  lastName: "",
  middleName: "",
  suffix: "",

  gender: "",
  civilStatus: "",
  spouseName: "",

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

  otherPersonSupport: {
    completeName: "",
    occupation: "",
    address: "",
    relationship: "",
  },

  churchName: "",
  dateBaptized: "",
  churchAddress: "",
  association: "",
  churchPastorName: "",
  churchPastorContactNumber: "",
};

type Props = {
  getValues?: (values: PersonalProps) => void;
};

const PersonalInformation: React.FC<Props> = ({ getValues }) => {
  const { values, setValues, handleOnChange } = useForm<PersonalProps>({
    initialValues,
  });

  const getGenderValue = useCallback(
    value => {
      setValues(prevState => ({
        ...prevState,
        gender: value,
      }));
    },
    [setValues]
  );

  const getCivilStatusValue = useCallback(
    value => {
      setValues(prevState => ({
        ...prevState,
        civilStatus: value,
      }));
    },
    [setValues]
  );

  const getParentsAnnualIncome = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues(prevState => ({
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
      setValues(prevState => ({
        ...prevState,
        parentsInfo: {
          ...prevState.parentsInfo,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const getOtherPersonSupport = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues(prevState => ({
        ...prevState,
        otherPersonSupport: {
          ...prevState.otherPersonSupport,
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
          heading="Gender & Status"
          id="gender-status"
          columns="repeat(3, 1fr)"
        >
          <Select
            label="gender"
            options={genderTypes}
            getSelectValue={value => {
              getGenderValue(value);
            }}
          />
          <Select
            label="civil status"
            options={civilStatus}
            getSelectValue={value => {
              getCivilStatusValue(value);
            }}
          />

          {values.civilStatus !== "Married" && (
            <Input
              label="Spouse Name"
              placeholder="Complete Name"
              id="spouse-name"
              name="spouseName"
              value={values.spouseName}
              onChange={handleOnChange}
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
            placeholder="Ex. Cebuano / etc."
            id="ethnic"
            name="ethnicAffiliation"
            value={values.ethnicAffiliation}
            onChange={handleOnChange}
          />
          <Input
            label="religion"
            placeholder="Ex. Southern Baptist / Etc.."
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
            label="home address"
            id="home-address"
            name="homeAddress"
            value={values.homeAddress}
            onChange={handleOnChange}
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
            value={values.otherPersonSupport?.completeName}
            onChange={getOtherPersonSupport}
          />
          <Input
            label="occupation"
            id="other-supporter-occupation"
            name="occupation"
            value={values.otherPersonSupport?.occupation}
            onChange={getOtherPersonSupport}
          />
          <Input
            label="address"
            id="other-supporter-address"
            name="address"
            value={values.otherPersonSupport?.address}
            onChange={getOtherPersonSupport}
          />
          <Input
            label="relationship"
            id="other-supporter-relationship"
            name="relationship"
            value={values.otherPersonSupport?.relationship}
            onChange={getOtherPersonSupport}
          />
        </InputWrapper>

        <InputWrapper
          heading="Church Information"
          id="church-information"
          columns="repeat(6, 1fr)"
        >
          <Input
            label="church name"
            id="church-name"
            name="churchName"
            value={values.churchName}
            onChange={handleOnChange}
          />
          <Input
            type="date"
            label="date baptized"
            id="date-baptized"
            name="dateBaptized"
            value={values.dateBaptized}
            onChange={handleOnChange}
          />
          <Input
            label="church address"
            id="church-address"
            name="churchAddress"
            value={values.churchAddress}
            onChange={handleOnChange}
          />
          <Input
            label="association"
            id="association"
            name="association"
            value={values.association}
            onChange={handleOnChange}
            required={false}
          />
          <Input
            label="church pastor name"
            placeholder="church pastor complete name"
            id="church-pastor"
            name="churchPastorName"
            value={values.churchPastorName}
            onChange={handleOnChange}
          />
          <Input
            type="number"
            label="pastor contact number"
            placeholder="contact number"
            id="church-pastor-contact-number"
            name="churchPastorContactNumber"
            value={values.churchPastorContactNumber}
            onChange={handleOnChange}
          />
        </InputWrapper>
      </StyledPersonalFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(PersonalInformation);
