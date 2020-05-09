import React, { useEffect, useCallback } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledBasicEdFieldWrapper,
} from "styles";
import { InputWrapper, Input, RadioWrapper, Radio } from "components";
import { EnrolleeStatusProps } from "routes";
import { useForm } from "hooks";

const initialValues: EnrolleeStatusProps = {
  typeOfStudent: "",
  schoolYear: {
    from: "",
    to: "",
  },
  lastSchoolYearAttended: {
    from: "",
    to: "",
  },
  educationLevel: "Elementary",
  gradeLevel: "",
  section: "",
};

type Props = {
  getValues?: (values: EnrolleeStatusProps) => void;
};

const EnrolleeStatus: React.FC<Props> = ({ getValues }) => {
  const { values, setValues, handleOnChange } = useForm<EnrolleeStatusProps>({
    initialValues,
  });

  useEffect(() => {
    if (getValues) {
      getValues(values);
    }
    // eslint-disable-next-line
  }, [values]);

  const onChangeSchoolYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        schoolYear: {
          ...prevState.schoolYear,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  const onChangeLastSchoolYear = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        lastSchoolYearAttended: {
          ...prevState.lastSchoolYearAttended,
          [name]: value,
        },
      }));
    },
    [setValues]
  );

  return (
    <StyledTheologySection>
      <StyledTheologySectionHeader>
        <h2>Enrollee Status</h2>
      </StyledTheologySectionHeader>

      <StyledBasicEdFieldWrapper>
        <RadioWrapper id="type-of-student" heading="What type student are you?">
          <Radio
            label="New Student"
            name="typeOfStudent"
            value="New Student"
            onChange={handleOnChange}
          />
          <Radio
            label="Returning Student"
            name="typeOfStudent"
            value="Returning Student"
            onChange={handleOnChange}
          />
          <Radio
            label="Current Student"
            name="typeOfStudent"
            value="Current Student"
            onChange={handleOnChange}
          />
          <Radio
            label="Transferee"
            name="typeOfStudent"
            value="Transferee"
            onChange={handleOnChange}
          />
          <Radio
            label="Foreigner"
            name="typeOfStudent"
            value="Foreigner"
            onChange={handleOnChange}
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
            name="from"
            value={values.schoolYear.from}
            onChange={onChangeSchoolYear}
          />
          <Input
            type="number"
            label="To"
            placeholder="year"
            id="to-year"
            name="to"
            value={values.schoolYear.to}
            onChange={onChangeSchoolYear}
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
            name="from"
            value={values.lastSchoolYearAttended?.from}
            onChange={onChangeLastSchoolYear}
          />
          <Input
            type="number"
            label="To"
            placeholder="year"
            id="last-to-year"
            name="to"
            value={values.lastSchoolYearAttended?.to}
            onChange={onChangeLastSchoolYear}
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
            value={values.educationLevel}
            onChange={handleOnChange}
            readOnly
          />
          <Input
            type="number"
            id="grade-level"
            label="grade level"
            name="gradeLevel"
            value={values.gradeLevel}
            onChange={handleOnChange}
          />
          <Input
            label="Section"
            id="section"
            name="section"
            value={values.section}
            onChange={handleOnChange}
          />
        </InputWrapper>
      </StyledBasicEdFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(EnrolleeStatus);
