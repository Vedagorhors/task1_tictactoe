import { FIELD_SIZE, EMPTY_CELL } from '../constants';

export const createEmptyField = () => {
	return new Array(FIELD_SIZE).fill(EMPTY_CELL);
};
