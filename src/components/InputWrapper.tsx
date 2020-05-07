import React from "react";
import {
  StyledFormInputContainer,
  StyledFormInputWrapper,
  StyledFormInputHeader,
  StyledFormHeading,
} from "styles";

type InputWrapperProps = {
  id?: string;
  heading?: string | React.ReactNode;
  rows?: string;
  columns?: string;
  insertedElements?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
};

const InputHeading: React.FC<InputWrapperProps> = ({
  heading,
  insertedElements,
}) => (
  <StyledFormInputHeader>
    <StyledFormHeading>
      {heading} {insertedElements && <span>{insertedElements}</span>}
    </StyledFormHeading>
  </StyledFormInputHeader>
);

const InputHeadingMemo = React.memo(InputHeading);

const InputWrapper: React.FC<InputWrapperProps> = ({
  id,
  heading,
  rows,
  columns,
  insertedElements,
  disabled,
  children,
}) => {
  return (
    <StyledFormInputContainer id={id} disabled={disabled}>
      {heading && (
        <InputHeadingMemo
          heading={heading}
          insertedElements={insertedElements}
        />
      )}
      <StyledFormInputWrapper rows={rows} columns={columns}>
        {children}
      </StyledFormInputWrapper>
    </StyledFormInputContainer>
  );
};

export default React.memo(InputWrapper);
