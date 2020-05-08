import styled from "styled-components/macro";

export const StyledEnrolleeFieldWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  #type-of-student {
    grid-column: 1 / -1;
  }

  #semester {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  #school-year {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  #desired-course {
    grid-column: 1 / -1;

    #course-name {
      grid-column: 1 / 3;
    }

    #year-level {
      grid-column: 3 / 4;
    }

    #school-last-attended {
      grid-column: 4 / -1;
    }
  }
`;
