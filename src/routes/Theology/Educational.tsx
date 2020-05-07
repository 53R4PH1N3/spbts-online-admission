import React from "react";
import {
  StyledTheologyEducational,
  StyledEducationalHeader,
  StyledEducationalFieldWrapper,
} from "styles";
import { InputWrapper, Input } from "components";

type Props = {};

const EducationalBackground: React.FC<Props> = () => {
  return (
    <StyledTheologyEducational>
      <StyledEducationalHeader>
        <h2>Educational Background</h2>
      </StyledEducationalHeader>

      <StyledEducationalFieldWrapper>
        <InputWrapper
          heading="primary education"
          id="primary-education"
          columns="1fr 20rem"
        >
          <Input
            label="school name"
            name="primarySchoolName"
            id="primary-school-name"
          />
          <Input
            type="number"
            label="year graduated"
            name="primaryYearGraduated"
            id="primary-year-graduated"
          />
        </InputWrapper>

        <InputWrapper
          heading="intermediate education"
          id="intermediate-education"
          columns="1fr 20rem"
        >
          <Input
            label="school name"
            name="intermediateSchoolName"
            id="intermediate-school-name"
          />
          <Input
            type="number"
            label="year graduated"
            name="intermediateYearGraduated"
            id="intermediate-year-graduated"
          />
        </InputWrapper>

        <InputWrapper
          heading="secondary education"
          id="secondary-education"
          columns="1fr 20rem"
        >
          <Input
            label="school name"
            name="secondarySchoolName"
            id="secondary-school-name"
          />
          <Input
            type="number"
            label="year graduated"
            name="secondaryYearGraduated"
            id="secondary-year-graduated"
          />
        </InputWrapper>

        <InputWrapper
          heading="college education"
          id="college-education"
          columns="repeat(2, 1fr) 20rem"
        >
          <Input
            label="school name"
            name="collegeSchoolName"
            id="college-school-name"
          />
          <Input
            label="course taken"
            name="collegeCourse"
            id="college-course-taken"
          />
          <Input
            type="number"
            label="year graduated"
            name="collegeYearGraduated"
            id="college-year-graduated"
          />
        </InputWrapper>

        <InputWrapper heading="special skills & abilities" id="special-skills">
          <Input label="skills & abilities" placeholder="please specify" />
        </InputWrapper>
      </StyledEducationalFieldWrapper>
    </StyledTheologyEducational>
  );
};

export default EducationalBackground;
