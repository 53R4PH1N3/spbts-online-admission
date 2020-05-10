import React from "react";
import { StyledTheologySection, StyledTheologySectionHeader } from "styles";

type Props = {
  heading: string;
  children?: React.ReactNode;
};

const SectionContainer: React.FC<Props> = ({ heading, children }) => {
  return (
    <StyledTheologySection>
      <StyledTheologySectionHeader>
        <h2>{heading}</h2>
      </StyledTheologySectionHeader>
      {children}
    </StyledTheologySection>
  );
};

export default React.memo(SectionContainer);
