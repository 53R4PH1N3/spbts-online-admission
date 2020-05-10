import React from "react";
import {
  CaretDownSVG,
  BackSVG,
  SendSVG,
  CheckMarkSVG,
  BugSVG,
  InfoSVG,
} from "assets/icons";

export type SVGProps = {
  icon: "caret-down" | "back" | "send" | "check-mark" | "bug" | "info";
};

const SVG: React.FC<SVGProps> = ({ icon }) => {
  switch (icon) {
    case "caret-down":
      return <CaretDownSVG />;
    case "back":
      return <BackSVG />;
    case "send":
      return <SendSVG />;
    case "check-mark":
      return <CheckMarkSVG />;
    case "bug":
      return <BugSVG />;
    case "info":
      return <InfoSVG />;
  }
};

export default React.memo(SVG);
