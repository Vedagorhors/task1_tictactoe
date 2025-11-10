import { EMPTY_CELL } from '../constants';

export const checkDraw = (field) => {
	return field.every((cell) => cell !== EMPTY_CELL);
};
