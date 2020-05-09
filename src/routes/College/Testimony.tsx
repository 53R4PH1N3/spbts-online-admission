import React, { useCallback, useEffect } from "react";
import {
  StyledTheologySection,
  StyledTheologySectionHeader,
  StyledTestimonyFieldWrapper,
} from "styles";
import { TextArea } from "components";
import { TestimonyProps } from "routes";
import { useForm } from "hooks";

type Props = {
  getValues?: (values: TestimonyProps) => void;
};

const initialValues: TestimonyProps = {
  salvationTestimony: "",
  purposeOfEnrolling: "",
};

const Testimony: React.FC<Props> = ({ getValues }) => {
  const { values, setValues } = useForm<TestimonyProps>({
    initialValues,
  });

  const getTextAreaValues = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
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
        <h2>Testimony</h2>
      </StyledTheologySectionHeader>

      <StyledTestimonyFieldWrapper>
        <TextArea
          label="Salvation Testimony"
          placeholder="Salvation Testimony ( English )"
          id="salvation-testimony"
          name="salvationTestimony"
          value={values.salvationTestimony}
          onChange={getTextAreaValues}
        />
        <TextArea
          label="Purpose of Enrolling in SPBTS"
          placeholder="Purpose of Enrolling in SPBTS ( English )"
          id="purpose-of-enrolling"
          name="purposeOfEnrolling"
          value={values.purposeOfEnrolling}
          onChange={getTextAreaValues}
        />
      </StyledTestimonyFieldWrapper>
    </StyledTheologySection>
  );
};

export default React.memo(Testimony);
