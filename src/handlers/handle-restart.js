import { createEmptyField } from '../utils';
import { PLAYER_X } from '../constants';

export const handleRestart = (props) => {
	const { setField, setCurrentPlayer, setIsGameEnded, setIsDraw } = props;
	const emptyField = createEmptyField();
	setField(emptyField);
	setCurrentPlayer(PLAYER_X);
	setIsGameEnded(false);
	setIsDraw(false);
};
