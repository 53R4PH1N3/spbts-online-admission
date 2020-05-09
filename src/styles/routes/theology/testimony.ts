import styled from "styled-components/macro";
import media from "styles/media";

export const StyledTestimonyFieldWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  #salvation-testimony {
    ${media.tabletXl} {
      grid-column: 1 / -1;
    }
  }

  #purpose-of-enrolling {
    ${media.tabletXl} {
      grid-column: 1 / -1;
    }
  }
`;
