import React from "react"

import { Wrapper } from './HomeStyle';
import Heading from "../../components/Heading/Heading";

function Home() {
  return (
    <Wrapper className="Home">
      <Heading 
        darkColor={true}
        size="huge"
        upperCase={true}
      >
        Hello
      </Heading>
    </Wrapper>
  );
}

export default Home;
