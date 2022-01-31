import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
	return (
		<WelcomeContainer>
			<h1>
				Welcome to Mythic <span>Plus</span> Profile {'\uF525'}
			</h1>
		</WelcomeContainer>
	);
};

export default Welcome;

const WelcomeContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #3bca8b;
	background-color: #353535;
`;
