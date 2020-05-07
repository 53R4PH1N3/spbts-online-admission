import React from "react";
import { StyledRadio, StyledRadioBox, StyledRadioLabel } from "styles";

type RadioProps = { label?: string } & React.HTMLProps<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  name,
  disabled,
  ...props
}) => {
  return (
    <StyledRadio htmlFor={id} disabled={disabled}>
      <input type="radio" name={name} id={id} disabled={disabled} {...props} />
      <StyledRadioBox />
      <StyledRadioLabel>{label}</StyledRadioLabel>
    </StyledRadio>
  );
};

export default React.memo(Radio);
