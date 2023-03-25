import React from "react"
import Base from "../Base";

import { Wrapper } from './HomeStyle';
import mockBase from '../Base/mock';

function Home() {
  return (
    <Wrapper className="Home">
      <Base {...mockBase} />
    </Wrapper>
  );
}

export default Home;
