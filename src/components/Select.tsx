import React, { useRef, useState, useEffect } from "react";
import {
  StyledSelectBox,
  StyledSelectLabel,
  StyledSelectButton,
  StyledSelectOption,
  StyledSelectOptionBox,
  StyledInputUnderline,
  StyledSelectedValue,
  StyledSelectPlaceholder,
} from "styles";
import SVG from "./SVG";
import { useTargetOutside } from "hooks";

export type SelectOptionProps = {
  text: string;
  onClick?: () => void;
};

type SelectProps = {
  options?: SelectOptionProps[];
  getSelectValue?: (value: string) => void;
} & React.HTMLProps<HTMLInputElement>;

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  options,
  required,
  readOnly,
  disabled,
  getSelectValue,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useTargetOutside({ ref: selectRef });

  const [value, setValue] = useState("");

  useEffect(() => {
    if (getSelectValue) {
      getSelectValue(value);
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <StyledSelectBox ref={selectRef}>
      <StyledSelectButton
        disabled={disabled}
        onClick={() => setOpen((prevState: boolean) => !prevState)}
      >
        {value ? (
          <StyledSelectedValue>{value}</StyledSelectedValue>
        ) : (
          <StyledSelectPlaceholder>
            {placeholder ? placeholder : label}
          </StyledSelectPlaceholder>
        )}
        <SVG icon="caret-down" />
      </StyledSelectButton>
      <StyledSelectLabel>
        {placeholder ? placeholder : label}
        {required && !disabled && <span>*</span>}
        {!required && !disabled && <i>( Optional )</i>}
        {disabled && <i>( Disabled )</i>}
      </StyledSelectLabel>
      <StyledInputUnderline />

      <StyledSelectOptionBox aria-hidden={open ? "false" : "true"}>
        {!readOnly && (
          <StyledSelectOption show={open}>
            {options?.map(({ text, onClick }, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen((prevState: boolean) => !prevState);
                    setValue(text);
                    if (onClick) {
                      onClick();
                    }
                  }}
                >
                  {text}
                </button>
              </li>
            ))}
          </StyledSelectOption>
        )}
      </StyledSelectOptionBox>
    </StyledSelectBox>
  );
};

Select.defaultProps = {
  options: [
    {
      text: "option-01",
    },
    { text: "option-02" },
  ],
  required: true,
};

export default React.memo(Select);
