import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        Powered by <a href="https://raider.io/">Raider.io</a> {"\u2764"}
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  background-color: ${colors.main.primary.dark};
  margin-bottom: 0;
  a {
    color: ${colors.main.light};

    &:hover {
      color: ${colors.main.secondary};
    }
  }
`;
