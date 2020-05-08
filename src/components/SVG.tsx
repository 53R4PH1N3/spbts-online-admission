import React from "react";
import { CaretDownSVG, BackSVG, SendSVG } from "assets/icons";

export type SVGProps = {
  icon: "caret-down" | "back" | "send";
};

const SVG: React.FC<SVGProps> = ({ icon }) => {
  switch (icon) {
    case "caret-down":
      return <CaretDownSVG />;
    case "back":
      return <BackSVG />;
    case "send":
      return <SendSVG />;
  }
};

export default React.memo(SVG);
