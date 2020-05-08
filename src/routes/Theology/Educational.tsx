import React, { useCallback, useEffect } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledEducationalFieldWrapper,
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

  shSchool: {
    schoolName: "",
    yearGraduated: "",
  },

  college: {
    schoolName: "",
    courseTaken: "",
    yearGraduated: "",
  },

  specialSkills: "",
};

type Props = {
  getValues?: (values: EducationalProps) => void;
};

const EducationalBackground: React.FC<Props> = ({ getValues }) => {
  const { values, setValues, handleOnChange } = useForm<EducationalProps>({
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

  const getSHSchoolValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        shSchool: {
          ...prevState.shSchool,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const getCollegeValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        college: {
          ...prevState.college,
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

      <StyledEducationalFieldWrapper>
        <InputWrapper heading="elementary" id="elementary" columns="1fr 20rem">
          <Input
            label="school name"
            id="elementary-school-name"
            name="schoolName"
            value={values.elementary.schoolName}
            onChange={getElementaryValues}
          />
          <Input
            type="number"
            label="year graduated"
            id="elementary-year-graduated"
            name="yearGraduated"
            value={values.elementary.yearGraduated}
            onChange={getElementaryValues}
          />
        </InputWrapper>

        <InputWrapper
          heading="junior high school"
          id="junior-high-school"
          columns="1fr 20rem"
        >
          <Input
            label="school name"
            id="jh-school-name"
            name="schoolName"
            value={values.jhSchool.schoolName}
            onChange={getJHSchoolValues}
          />
          <Input
            type="number"
            label="year graduated"
            id="jh-year-graduated"
            name="yearGraduated"
            value={values.jhSchool.yearGraduated}
            onChange={getJHSchoolValues}
          />
        </InputWrapper>

        <InputWrapper
          heading="senior high school"
          id="senior-high-school"
          columns="1fr 20rem"
        >
          <Input
            label="school name"
            id="sh-school-name"
            name="schoolName"
            value={values.shSchool.schoolName}
            onChange={getSHSchoolValues}
          />
          <Input
            type="number"
            label="year graduated"
            id="sh-year-graduated"
            name="yearGraduated"
            value={values.shSchool.yearGraduated}
            onChange={getSHSchoolValues}
          />
        </InputWrapper>

        <InputWrapper
          heading="college last attended"
          id="college-attended"
          columns="repeat(2, 1fr) 20rem"
        >
          <Input
            label="school name"
            id="college-school-name"
            name="schoolName"
            value={values.college.schoolName}
            onChange={getCollegeValues}
            required={false}
          />
          <Input
            label="course taken"
            id="college-course-taken"
            name="courseTaken"
            value={values.college.courseTaken}
            onChange={getCollegeValues}
            required={false}
          />
          <Input
            type="number"
            label="year graduated"
            id="college-year-graduated"
            name="yearGraduated"
            value={values.college.yearGraduated}
            onChange={getCollegeValues}
            required={false}
          />
        </InputWrapper>

        <InputWrapper heading="special skills & abilities" id="special-skills">
          <Input
            label="skills & abilities"
            placeholder="please specify"
            name="specialSkills"
            value={values.specialSkills}
            onChange={handleOnChange}
          />
        </InputWrapper>
      </StyledEducationalFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(EducationalBackground);
