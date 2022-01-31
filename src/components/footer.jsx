import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return <FooterContainer>Powered by Raider.io {'\u2764'}</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
  left: 0;
  text-align: center;
  padding-bottom: 0.5rem;
  background-color: #1b1d27;
`;
