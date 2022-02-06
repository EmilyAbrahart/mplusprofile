import React from "react";
import styled from "styled-components";
import {colors} from '../styles';

const Footer = () => {
  return (
    <FooterContainer>
      Powered by <a href="https://raider.io/">Raider.io</a> {"\u2764"}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  /* position: fixed;
  width: 100%;
  bottom: 0;
  left: 0; */
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
