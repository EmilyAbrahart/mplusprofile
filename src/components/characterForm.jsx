import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addCharacter, getCharacterData } from '../state/actions/characters';

const CharacterForm = ({ addCharacter, getCharacterData }) => {
	const [name, setName] = useState('');
	const [server, setServer] = useState('');
	const [region, setRegion] = useState('');

	const handleNameChange = event => {
		setName(event.target.value);
	};
	const handleServerChange = event => {
		setServer(event.target.value);
	};
	const handleRegionChange = event => {
		setRegion(event.target.value);
	};
	const handleSubmit = () => {
		const newCharacter = {
			name,
			server,
			region
		};
		addCharacter(newCharacter);
		getCharacterData(
			newCharacter.name,
			newCharacter.server,
			newCharacter.region
		);
		setName('');
		setServer('');
		setRegion('');
	};

	return (
		<FormContainer>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Character Name"
					onChange={handleNameChange}
					value={name}
				/>
				<input
					type="text"
					name="server"
					placeholder="Server"
					onChange={handleServerChange}
					value={server}
				/>
				<input
					type="text"
					name="region"
					placeholder="Region"
					onChange={handleRegionChange}
					value={region}
				/>
			</form>
			<button
				onClick={() => {
					handleSubmit();
				}}
			>
				ADD
			</button>
		</FormContainer>
	);
};

export default connect(state => state, { addCharacter, getCharacterData })(
	CharacterForm
);

const FormContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		input {
			margin: 0.5rem;
			padding: 0.5rem;
			width: 12rem;
			box-sizing: border-box;
		}
	}
	button {
		border: none;
		color: #2b2b2b;
		background-color: #3bca8b;
		width: 5rem;
		padding: 0.6rem;
		font-weight: 700;
		margin: 0.5rem;

		&:hover {
			cursor: pointer;
		}
	}
`;
