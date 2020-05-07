import React from "react";
import { CaretDownSVG, BackSVG } from "assets/icons";

export type SVGProps = {
  icon: "caret-down" | "back";
};

const SVG: React.FC<SVGProps> = ({ icon }) => {
  switch (icon) {
    case "caret-down":
      return <CaretDownSVG />;
    case "back":
      return <BackSVG />;
  }
};

export default React.memo(SVG);
