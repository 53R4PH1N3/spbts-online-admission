import styled from "styled-components/macro";
import { StyledEnrolleeFieldWrapper } from "..";

export const StyledBasicEdFieldWrapper = styled(StyledEnrolleeFieldWrapper)`
  #school-year {
    grid-column: 1 / 2;
  }

  #last-school-year {
  }

  #section {
    grid-column: 4 / -1;
  }
`;
