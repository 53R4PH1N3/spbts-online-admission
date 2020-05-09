import React, { useEffect, useCallback } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledEnrolleeFieldWrapper,
} from "styles";
import { InputWrapper, Input, RadioWrapper, Radio } from "components";
import { EnrolleeStatusProps } from "routes";
import { useForm } from "hooks";

const initialValues: EnrolleeStatusProps = {
  typeOfStudent: "",
  semester: "",
  schoolYear: {
    from: "",
    to: "",
  },
  desiredCourse: "Bachelor of Arts in Christian Education",
  yearLevel: "",
  schoolNameLastAttended: "",
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

  return (
    <StyledTheologySection>
      <StyledTheologySectionHeader>
        <h2>Enrollee Status</h2>
      </StyledTheologySectionHeader>

      <StyledEnrolleeFieldWrapper>
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
            label="Cross Enrollee"
            name="typeOfStudent"
            value="Cross Enrollee"
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

        <RadioWrapper id="semester" heading="Semester">
          <Radio
            label="1st"
            name="semester"
            value="1st"
            onChange={handleOnChange}
          />
          <Radio
            label="2nd"
            name="semester"
            value="2st"
            onChange={handleOnChange}
          />
          <Radio
            label="Summer"
            name="semester"
            value="Summer"
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
          heading="Desired Course"
          id="desired-course"
          columns="repeat(6, 1fr)"
        >
          <Input
            label="Course Name"
            id="course-name"
            name="desiredCourse"
            value={values.desiredCourse}
            onChange={handleOnChange}
            readOnly
          />
          <Input
            type="number"
            id="year-level"
            label="Year Level"
            name="yearLevel"
            value={values.yearLevel}
            onChange={handleOnChange}
          />
          <Input
            label="Name of School Last S.Y. Attended"
            id="school-last-attended"
            name="schoolNameLastAttended"
            value={values.schoolNameLastAttended}
            onChange={handleOnChange}
            required={false}
          />
        </InputWrapper>
      </StyledEnrolleeFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(EnrolleeStatus);
