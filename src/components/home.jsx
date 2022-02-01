import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getDungeons, getColors } from "../state/actions/dungeons";

import Heading from "./heading";
import CharactersData from "./charactersData";
import Footer from "./footer";

const Home = ({ dungeons: { colors, dungeonData }, getDungeons, getColors }) => {
  useEffect(() => {
    if (!dungeonData) {
      getDungeons();
    }
    if (!colors) {
      getColors();
    }
  }, []);

  return (
    <HomeContainer>
      <Heading />
      <HeadingBlock />
      <MainContentContainer>
        <CharactersData />
      </MainContentContainer>
      <Footer />
    </HomeContainer>
  );
};

export default connect((state) => state, { getDungeons, getColors })(Home);

const HomeContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeadingBlock = styled.div`
  width: 100%;
  height: 3.5rem;
`;
