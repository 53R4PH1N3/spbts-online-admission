import React from "react";
import {
  StyledFormRadioContainer,
  StyledFormRadioWrapper,
  StyledFormInputHeader,
  StyledFormHeading,
  StyledFormRadioError,
} from "styles";

type RadioWrapperProps = {
  id?: string;
  heading?: string;
  rows?: string;
  columns?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  error?: string;
};

const RadioHeading: React.FC<RadioWrapperProps> = ({ heading }) => (
  <StyledFormInputHeader>
    <StyledFormHeading>{heading}</StyledFormHeading>
  </StyledFormInputHeader>
);

const RadioHeadingMemo = React.memo(RadioHeading);

const RadioWrapper: React.FC<RadioWrapperProps> = ({
  id,
  heading,
  rows,
  columns,
  disabled,
  children,
  error,
}) => {
  return (
    <StyledFormRadioContainer id={id} disabled={disabled}>
      {heading && <RadioHeadingMemo heading={heading} />}
      <StyledFormRadioWrapper rows={rows} columns={columns}>
        {children}
      </StyledFormRadioWrapper>
      {error && <StyledFormRadioError>{error}</StyledFormRadioError>}
    </StyledFormRadioContainer>
  );
};

export default React.memo(RadioWrapper);
