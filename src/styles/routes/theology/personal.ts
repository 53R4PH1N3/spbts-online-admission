import styled from "styled-components";
import { StyledFormFieldWrapper } from "styles";

export const StyledPersonalFieldWrapper = styled(StyledFormFieldWrapper)`
  #full-name {
    #suffix {
      width: 50%;
    }
  }

  #gender-status {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  #birth-info {
    grid-row: 3 / 4;
    grid-column: 1 / 2;

    #birth-place {
      grid-column: 1 / 3;
    }
  }

  #nationalism {
    grid-row: 4 / 5;
    grid-column: 1 / 2;

    #religion {
      grid-column: 1 / 3;
    }
  }

  #contact-information {
    #home-address {
      grid-column: 1 / -1;
    }
  }

  #father-information {
    #fathers-name {
      grid-column: 1 / 3;
    }
  }

  #mother-information {
    #mothers-name {
      grid-column: 1 / 3;
    }
  }

  #person-supporting {
    #other-supporter-name {
      grid-column: 1 / 3;
    }
    #other-supporter-address {
      grid-column: 1 / 3;
    }
  }

  #parents-income {
    grid-column: 1 / -1;
  }

  #student-type {
    grid-column: 1 / -1;
  }
`;
