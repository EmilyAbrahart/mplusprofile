import React from 'react';
import styled from 'styled-components';

import AD from '../img/dungeons/AD.jpg';
import FH from '../img/dungeons/FH.jpg';
import KR from '../img/dungeons/KR.jpg';
import ML from '../img/dungeons/ML.jpg';
import SIEGE from '../img/dungeons/SOB.jpg';
import SOTS from '../img/dungeons/SOTS.jpg';
import TD from '../img/dungeons/TD.jpg';
import TOS from '../img/dungeons/TOS.jpg';
import UNDR from '../img/dungeons/UR.jpg';
import WM from '../img/dungeons/WM.jpg';
import WORK from '../img/dungeons/WORK.jpg';
import YARD from '../img/dungeons/YARD.jpg';

const Dungeon = ({ name, dungeon }) => {
	return (
		<DungeonContainer name={name} dungeon={dungeon[0] || dungeon}>
			<div className="name">
				<h3>{name}</h3>
			</div>
			<div className="level">
				<h3>
					{dungeon[0]
						? dungeon[0].mythic_level
						: dungeon
						? dungeon.mythic_level
						: null}
				</h3>
			</div>
		</DungeonContainer>
	);
};

export default Dungeon;

const DungeonContainer = styled.div`
	background-image: ${props =>
		props.name === 'AD' && props.dungeon.mythic_level
			? `url(${AD})`
			: props.name === 'FH' && props.dungeon.mythic_level
			? `url(${FH})`
			: props.name === 'KR' && props.dungeon.mythic_level
			? `url(${KR})`
			: props.name === 'ML' && props.dungeon.mythic_level
			? `url(${ML})`
			: props.name === 'SIEGE' && props.dungeon.mythic_level
			? `url(${SIEGE})`
			: props.name === 'SOTS' && props.dungeon.mythic_level
			? `url(${SOTS})`
			: props.name === 'TD' && props.dungeon.mythic_level
			? `url(${TD})`
			: props.name === 'TOS' && props.dungeon.mythic_level
			? `url(${TOS})`
			: props.name === 'UNDR' && props.dungeon.mythic_level
			? `url(${UNDR})`
			: props.name === 'WM' && props.dungeon.mythic_level
			? `url(${WM})`
			: props.name === 'WORK' && props.dungeon.mythic_level
			? `url(${WORK})`
			: props.name === 'YARD' && props.dungeon.mythic_level
			? `url(${YARD})`
			: props.name === 'AD'
			? `linear-gradient(black, black),url(${AD})`
			: props.name === 'FH'
			? `linear-gradient(black, black),url(${FH})`
			: props.name === 'KR'
			? `linear-gradient(black, black),url(${KR})`
			: props.name === 'ML'
			? `linear-gradient(black, black),url(${ML})`
			: props.name === 'SIEGE'
			? `linear-gradient(black, black),url(${SIEGE})`
			: props.name === 'SOTS'
			? `linear-gradient(black, black),url(${SOTS})`
			: props.name === 'TD'
			? `linear-gradient(black, black),url(${TD})`
			: props.name === 'TOS'
			? `linear-gradient(black, black),url(${TOS})`
			: props.name === 'UNDR'
			? `linear-gradient(black, black),url(${UNDR})`
			: props.name === 'WM'
			? `linear-gradient(black, black),url(${WM})`
			: props.name === 'WORK'
			? `linear-gradient(black, black),url(${WORK})`
			: props.name === 'YARD'
			? `linear-gradient(black, black),url(${YARD})`
			: null};
	background: ${props =>
		props.dungeon ? null : 'linear-gradient(black, black),'};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	margin-right: 1rem;
	border: 1px solid #2b2b2b;
	background-blend-mode: saturation;
	text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
	position: relative;

	.name {
		position: absolute;
		top: -13px;
		color: white;
		h3 {
			margin: 0;
		}
	}

	.level {
		background-color: rgba(43, 43, 43, 0.5);
		width: 100%;
		height: 100%;
		h3 {
			color: #3bca8b;
			font-size: 1.5rem;
		}
	}
`;
