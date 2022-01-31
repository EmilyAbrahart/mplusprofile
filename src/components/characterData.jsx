import React, { useState } from 'react';
import styled from 'styled-components';
import * as styles from '../styles';

import Dungeon from './dungeon';
import { dungeonData } from '../data';

const CharacterData = props => {
	const [showDelete, setShowDelete] = useState(false);

	return (
		<CharacterDataContainer
			index={props.index}
			characterClass={props.class}
			classColours={styles.classColors}
			onMouseEnter={() => setShowDelete(true)}
			onMouseLeave={() => setShowDelete(false)}
		>
			<DeleteButton
				onClick={() => props.deleteCharacter(props.name)}
				showDelete={showDelete}
			>x
			</DeleteButton>
			<CharacterClass
				characterClass={props.class}
				classColours={styles.classColors}
			>
				<Avatar>
					<img src={props.thumbnail_url} alt="avatar" />
				</Avatar>
				{props.name}
			</CharacterClass>
			<ScoreContainer>
				{props.mythic_plus_scores_by_season[0].scores.all}
			</ScoreContainer>
			<HighestWeeklyDungeon>
				{props.mythic_plus_weekly_highest_level_runs[0] ? (
					<Dungeon
						dungeon={props.mythic_plus_weekly_highest_level_runs[0]}
						name={props.mythic_plus_weekly_highest_level_runs[0].short_name}
					/>
				) : (
					'--'
				)}
			</HighestWeeklyDungeon>
			<DungeonsContainer>
				{dungeonData.map(dungeon => (
					<Dungeon
						key={dungeon.name}
						name={dungeon.name}
						dungeon={props.mythic_plus_best_runs.filter(
							e => e.short_name === dungeon.name
						)}
					/>
				))}
			</DungeonsContainer>
		</CharacterDataContainer>
	);
};

export default CharacterData;

const CharacterDataContainer = styled.div`
	border: 1px solid black;
	height: 5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.3rem;
	width: 1230px;
	background-color: ${props => props.classColours[props.characterClass]};
	padding: 0 1rem;
	text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
	box-sizing: border-box;
	position: relative;
	color: white;
	font-weight: 700;
`;

const CharacterClass = styled.div`
	color: white;
	height: 1.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 8rem;
	font-size: 1.3rem;
`;

const DungeonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	color: white;
`;

const HighestWeeklyDungeon = styled.div`
	width: 48px;
	text-align: center;
	color: #2b2b2b;
	text-shadow: none;
`;

const DeleteButton = styled.button`
	height: 100%;
	width: 1.5rem;
	background-color: #ff5851;
	display: ${props => (props.showDelete ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	border: none;
	padding: 0;
	position: absolute;
	left: -1.5rem;
	border: 1px solid black;

	&:hover {
		cursor: pointer;
	}
`;

const ScoreContainer = styled.div`
	font-weight: 700;
	font-size: 1.3rem;
`;

const Avatar = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #2b2b2b;
	margin-right: 1rem;

	img {
		height: 3rem;
		width: 3rem;
	}
`;
