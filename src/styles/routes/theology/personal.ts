import styled from "styled-components";

export const StyledPersonalFieldWrapper = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);

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
      grid-column: 1 / -1;
    }

    #birth-date {
    }

    #age {
      width: 50%;
    }
  }

  #nationalism {
    grid-row: 4 / 5;
    grid-column: 1 / 2;

    #religion {
      grid-column: 1 / 3;
    }
  }

  #church-information {
    grid-column: 1 / -1;

    #church-name {
      grid-column: 1 / 3;
    }

    #denomination {
    }

    #church-address {
      grid-column: 1 / 3;
    }

    #association {
    }

    #church-pastor {
      grid-row: 1 / 2;
      grid-column: 4 / 6;
    }

    #church-pastor-contact-number {
      grid-row: 1 / 2;
      grid-column: 6 / -1;
    }
  }

  #contact-information {
    #home-address {
      grid-column: 1 / -1;
    }
  }

  #parent-information {
    #fathers-name {
      grid-column: 1 / 3;
    }
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
    /* grid-column: 1 / -1; */
  }

  #student-type {
    grid-column: 1 / -1;
  }
`;
