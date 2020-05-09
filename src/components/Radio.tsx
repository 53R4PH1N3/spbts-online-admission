import React from "react";
import { StyledRadio, StyledRadioBox, StyledRadioLabel } from "styles";

type RadioProps = { label?: string } & React.HTMLProps<HTMLInputElement>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, name, disabled, ...props }, ref) => {
    return (
      <StyledRadio htmlFor={id} disabled={disabled}>
        <input
          type="radio"
          name={name}
          id={id}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <StyledRadioBox />
        <StyledRadioLabel>{label}</StyledRadioLabel>
      </StyledRadio>
    );
  }
);

export default React.memo(Radio);
