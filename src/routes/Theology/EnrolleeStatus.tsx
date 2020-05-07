import React from "react";
import {
  StyledTheologyEducational,
  StyledEducationalHeader,
  StyledEducationalFieldWrapper,
} from "styles";
import { InputWrapper, Input, RadioWrapper, Radio } from "components";

type Props = {};

const EnrolleeStatus: React.FC<Props> = () => {
  return (
    <StyledTheologyEducational>
      <StyledEducationalHeader>
        <h2>Enrollee Status</h2>
      </StyledEducationalHeader>

      <StyledEducationalFieldWrapper>
        <RadioWrapper id="student-type" heading="What type student are you?">
          <Radio label="New Student" name="student-type" />
          <Radio label="Returning Student" name="student-type" />
          <Radio label="Cross Enrolle" name="student-type" />
          <Radio label="Current Student" name="student-type" />
          <Radio label="Transferee" name="student-type" />
          <Radio label="Foreigner" name="student-type" />
        </RadioWrapper>

        <RadioWrapper id="semester" heading="Semester">
          <Radio label="1st" name="semester" />
          <Radio label="2nd" name="semester" />
          <Radio label="Summer" name="semester" />
        </RadioWrapper>

        <InputWrapper
          heading="School Year"
          id="school-year"
          columns="repeat(2, 1fr)"
        >
          <Input
            label="From"
            placeholder="year"
            name="fromYear"
            id="from-year"
          />
          <Input label="To" placeholder="year" name="toYear" id="to-year" />
        </InputWrapper>
      </StyledEducationalFieldWrapper>
    </StyledTheologyEducational>
  );
};

export default EnrolleeStatus;
