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
