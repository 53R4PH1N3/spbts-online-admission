import React, { useCallback, useEffect } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledBasicEdEducationalFieldWrapper,
} from "styles";
import { InputWrapper, Input } from "components";
import { EducationalProps } from "routes";
import { useForm } from "hooks";

const initialValues: EducationalProps = {
  elementary: {
    schoolName: "",
    yearGraduated: "",
  },

  jhSchool: {
    schoolName: "",
    yearGraduated: "",
  },

  authorizedPersons: {
    person1Name: "",
    person1Relationship: "",
    person2Name: "",
    person2Relationship: "",
  },
};

type Props = {
  getValues?: (values: EducationalProps) => void;
};

const EducationalBackground: React.FC<Props> = ({ getValues }) => {
  const { values, setValues } = useForm<EducationalProps>({
    initialValues,
  });

  const getElementaryValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        elementary: {
          ...prevState.elementary,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const getJHSchoolValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        jhSchool: {
          ...prevState.jhSchool,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const getAuthorizedPersonsValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        authorizedPersons: {
          ...prevState.authorizedPersons,
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
        <h2>Educational Background</h2>
      </StyledTheologySectionHeader>

      <StyledBasicEdEducationalFieldWrapper>
        <InputWrapper
          heading="elementary"
          id="elementary"
          columns="repeat(3, 1fr)"
        >
          <Input
            label="school name"
            id="elementary-school-name"
            name="schoolName"
            value={values.elementary?.schoolName}
            onChange={getElementaryValues}
          />
          <Input
            type="number"
            label="year graduated"
            id="elementary-year-graduated"
            name="yearGraduated"
            value={values.elementary?.yearGraduated}
            onChange={getElementaryValues}
          />
        </InputWrapper>

        <InputWrapper
          heading="junior high school"
          id="junior-high-school"
          columns="repeat(3, 1fr)"
        >
          <Input
            label="school name"
            id="jh-school-name"
            name="schoolName"
            value={values.jhSchool?.schoolName}
            onChange={getJHSchoolValues}
          />
          <Input
            type="number"
            label="year graduated"
            id="jh-year-graduated"
            name="yearGraduated"
            value={values.jhSchool?.yearGraduated}
            onChange={getJHSchoolValues}
          />
        </InputWrapper>

        <InputWrapper
          heading="Authorized person/s to have an access your school records"
          id="authorized-persons"
          columns="repeat(6, 1fr)"
        >
          <Input
            label="complete name"
            id="authorized-person-name-1"
            name="person1Name"
            value={values.authorizedPersons?.person1Name}
            onChange={getAuthorizedPersonsValues}
          />
          <Input
            label="relationship"
            id="authorized-person-relationship-1"
            name="person1Relationship"
            value={values.authorizedPersons?.person1Relationship}
            onChange={getAuthorizedPersonsValues}
          />
          <Input
            label="complete name"
            id="authorized-person-name-2"
            name="person2Name"
            value={values.authorizedPersons?.person2Name}
            onChange={getAuthorizedPersonsValues}
          />
          <Input
            label="relationship"
            id="authorized-person-relationship-2"
            name="person2Relationship"
            value={values.authorizedPersons?.person2Relationship}
            onChange={getAuthorizedPersonsValues}
          />
        </InputWrapper>
      </StyledBasicEdEducationalFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(EducationalBackground);
