import { PLAYER_X, PLAYER_O } from '../constants';
export const switchPlayer = (currentPlayer) => {
	return currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
};
