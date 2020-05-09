import styled from "styled-components/macro";

export const StyledEducationalFieldWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  #elementary {
    #elementary-school-name {
      grid-column: 1 / 3;
    }

    #elementary-year-graduated {
    }
  }

  #junior-high-school {
    #jh-school-name {
      grid-column: 1 / 3;
    }

    #jh-year-graduated {
    }
  }

  #senior-high-school {
    #sh-school-name {
      grid-column: 1 / 3;
    }

    #sh-year-graduated {
    }
  }

  #college-attended {
    #college-school-name {
      grid-column: 1 / -1;
    }

    #college-course-taken {
      grid-column: 1 / 3;
    }

    #college-year-graduated {
    }
  }

  #special-skills {
    #special-skills {
    }
  }
`;
