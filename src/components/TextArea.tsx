import React, { useRef, useEffect } from "react";
import {
  StyledInputBox,
  StyledInputUnderline,
  StyledInputLabel,
  StyledTextArea,
} from "styles";
import autosize from "autosize";

type AreaProps = { label?: string } & React.HTMLProps<HTMLTextAreaElement>;

const TextArea: React.FC<AreaProps> = ({
  id,
  name,
  value,
  label,
  placeholder,
  disabled,
  readOnly,
  required,
  onChange,
}) => {
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const inputId = id && `${id}_input`;

  useEffect(() => {
    if (areaRef.current) {
      autosize(areaRef.current);
    }
  }, []);

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
        ref={areaRef}
      />
      {label && (
        <StyledInputLabel htmlFor={inputId}>
          {label}
          {required && !disabled && <span>*</span>}
          {!required && !disabled && <i>( Optional )</i>}
          {disabled && <i>( Disabled )</i>}
        </StyledInputLabel>
      )}
      <StyledInputUnderline />
    </StyledInputBox>
  );
};

TextArea.defaultProps = {
  required: true,
};

export default React.memo(TextArea);
