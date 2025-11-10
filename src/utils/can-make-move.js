import { EMPTY_CELL } from '../constants';

// canMakeMove - функция проверки возможности хода. Если true, то ход можно сделать
export const canMakeMove = (field, index, isGameEnded) =>
	!isGameEnded && field[index] === EMPTY_CELL;
// field[index] === EMPTY_CELL - конкретная ячейка с индексом index пуста
