import React from 'react';
import styled from 'styled-components';
import { styles } from '../constants.js';

const StyledHeading = styled.h1`
  text-align: center;
  font-family: ${styles.headerFontFamily};
  font-size: 4rem;
  color: #444;

  @media (max-width: 600px) {
    & {
      font-size: 3rem;
    }
  }
`;

const Heading = (props) => {
    return (
      <StyledHeading>
        &lt;HTML&gt; &amp; &#123;CSS&#125; Quiz
      </StyledHeading>
    );
}

export default Heading;
