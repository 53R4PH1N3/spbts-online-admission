import React from "react";
import {
  StyledInputBox,
  StyledInputUnderline,
  StyledInputLabel,
  StyledTextArea,
} from "styles";

type AreaProps = { label?: string; error?: string } & React.HTMLProps<
  HTMLTextAreaElement
>;

const TextArea = React.forwardRef<HTMLTextAreaElement, AreaProps>(
  (
    {
      id,
      name,
      value,
      label,
      placeholder,
      disabled,
      readOnly,
      required,
      error,
      onChange,
    },
    ref
  ) => {
    const inputId = id && `${id}_input`;

    return (
      <StyledInputBox id={id}>
        <StyledTextArea
          as="textarea"
          id={inputId}
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

TextArea.defaultProps = {
  required: true,
};

export default React.memo(TextArea);
