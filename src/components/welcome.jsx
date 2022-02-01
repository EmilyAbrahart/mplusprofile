import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
	return (
		<WelcomeContainer>
			<h1>
				Welcome to Mythic <span>Plus</span> Profile<span>.</span>
			</h1>
			Add a character to start tracking.
		</WelcomeContainer>
	);
};

export default Welcome;

const WelcomeContainer = styled.div`
	width: 100%;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #3bca8b;
	background-color: #232734;

	span {
		color: #3bca8b;
	}
`;
