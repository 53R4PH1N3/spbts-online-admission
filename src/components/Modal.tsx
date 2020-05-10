import React from "react";
import { RodalProps } from "rodal";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledModalContentHeader,
} from "styles";
import { SVG } from "components";

type Props = {
  type?: "success" | "info";
  title?: string;
  heading?: string;
  subHeading?: string;
  children?: React.ReactNode;
} & RodalProps;

const Modal: React.FC<Props> = ({
  type,
  title,
  heading,
  subHeading,
  children,
  ...props
}) => {
  return (
    <StyledModal {...props}>
      <StyledModalHeader>
        <h4>
          <SVG icon={type === "success" ? "check-mark" : "info"} />
          {title}
        </h4>
      </StyledModalHeader>
      <StyledModalContent>
        <StyledModalContentHeader>
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </StyledModalContentHeader>
      </StyledModalContent>
    </StyledModal>
  );
};

Modal.defaultProps = {
  type: "info",
};

export default React.memo(Modal);
