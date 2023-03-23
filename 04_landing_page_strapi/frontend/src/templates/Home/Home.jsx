import React from "react"

import { Wrapper } from './HomeStyle';
import TextComponent from '../../components/TextComponent/TextComponent';
import NavLinks from "../../components/NavLinks/NavLiks";
import LogoLink from "../../components/LogoLink/LogoLink";

function Home() {
  return (
    <Wrapper className="Home">
      <LogoLink />
      <TextComponent>Children</TextComponent>
      <NavLinks />
    </Wrapper>
  );
}

export default Home;
