import React from 'react';
import styled from 'styled-components';

import CharacterForm from './characterForm';


const Heading = () => {
	return (
		<HeadingContainer>
			<h1>
				MYTHIC <span>PLUS</span> PROFILE<span>.</span>
			</h1>
			<CharacterForm />
		</HeadingContainer>
	);
};

export default Heading;

const HeadingContainer = styled.div`
width: 100%;
position: absolute;
top: 0;
left: 0;
padding: 1rem;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;

span {
  color: #3bca8b;
}
`