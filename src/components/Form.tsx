import React from "react";
import {
  StyledForm,
  StyledTheologySubmitSection,
  StyledButtonPrimary,
} from "styles";
import SVG from "./SVG";

type Props = {
  children?: React.ReactNode;
} & React.HTMLProps<HTMLFormElement>;

const Form: React.FC<Props> = ({ onSubmit, disabled, children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
      <StyledTheologySubmitSection>
        <StyledButtonPrimary type="submit" disabled={disabled}>
          Submit Form
          <SVG icon="send" />
        </StyledButtonPrimary>
      </StyledTheologySubmitSection>
    </StyledForm>
  );
};

export default Form;
