import React from "react";
import { StyledCheckbox, StyledCheckboxBox, StyledCheckboxLabel } from "styles";

type Props = {
  label?: string;
  containerId?: string;
} & React.HTMLProps<HTMLInputElement>;

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, label, name, disabled, containerId, ...props }, ref) => {
    return (
      <StyledCheckbox htmlFor={id} disabled={disabled} id={containerId}>
        <input
          type="checkbox"
          name={name}
          id={id}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        <StyledCheckboxBox />
        <StyledCheckboxLabel>{label}</StyledCheckboxLabel>
      </StyledCheckbox>
    );
  }
);

export default React.memo(Checkbox);
