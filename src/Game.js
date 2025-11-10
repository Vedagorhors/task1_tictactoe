import { useState } from 'react';
import { GameLayout } from './game-layout';
import { PLAYER_X } from './constants';
import { handleRestart, handleCellClick } from './handlers';

import { createEmptyField } from './utils';

export const Game = () => {
	const [field, setField] = useState(createEmptyField());
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const onCellClick = (index) => {
		handleCellClick({
			field,
			index,
			currentPlayer,
			isGameEnded,
			setField,
			setCurrentPlayer,
			setIsGameEnded,
			setIsDraw,
		});
	};

	const onRestart = () => {
		handleRestart({
			setField,
			setCurrentPlayer,
			setIsGameEnded,
			setIsDraw,
		});
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			onCellClick={onCellClick}
			onRestart={onRestart}
		/>
	);
};
