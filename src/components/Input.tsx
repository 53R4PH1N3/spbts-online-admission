import React from "react";
import {
  StyledInputBox,
  StyledInput,
  StyledInputUnderline,
  StyledInputLabel,
} from "styles";

type InputProps = {
  label?: string;
  error?: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type,
      placeholder,
      label,
      className,
      name,
      value,
      required,
      readOnly,
      disabled,
      error,
      onChange,
    },
    ref
  ) => {
    const inputId = id && `${id}_input`;

    return (
      <StyledInputBox id={id} className={className}>
        <StyledInput
          id={inputId}
          type={type}
          placeholder={placeholder ? placeholder : label}
          isLabeled={label != null}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
        />
        {label && (
          <StyledInputLabel htmlFor={inputId}>
            {!error ? label : error}
            {required && !disabled && <span>*</span>}
            {!required && !disabled && <i>( Optional )</i>}
            {disabled && <i>( Disabled )</i>}
          </StyledInputLabel>
        )}
        <StyledInputUnderline />
      </StyledInputBox>
    );
  }
);

Input.defaultProps = {
  type: "text",
  required: true,
};

export default React.memo(Input);
