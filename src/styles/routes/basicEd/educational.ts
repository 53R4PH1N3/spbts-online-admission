import styled from "styled-components";
import { StyledEducationalFieldWrapper } from "..";

export const StyledBasicEdEducationalFieldWrapper = styled(
  StyledEducationalFieldWrapper
)`
  #authorized-persons {
    grid-column: 1 / -1;

    #authorized-person-name-1 {
      grid-column: 1 / 3;
    }

    #authorized-person-name-2 {
      grid-column: 4 / 6;
    }
  }
`;
