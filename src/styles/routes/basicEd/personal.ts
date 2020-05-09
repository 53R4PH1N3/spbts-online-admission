import styled from "styled-components";
import { StyledPersonalFieldWrapper } from "..";

export const StyledBasicEdPersonalFieldWrapper = styled(
  StyledPersonalFieldWrapper
)`
  #permanent-address {
    grid-column: 1 / -1;
  }

  #scholarship-info {
    #scholarship {
      grid-column: 1 / 3;
    }
  }
`;
