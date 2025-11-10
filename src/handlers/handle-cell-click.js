import { canMakeMove, checkWin, checkDraw, switchPlayer } from '../utils';

export const handleCellClick = (props) => {
	const {
		field,
		index,
		isGameEnded,
		setIsGameEnded,
		setIsDraw,
		currentPlayer,
		setField,
		setCurrentPlayer,
	} = props;

	// Проверяем возможность хода
	const movePossible = canMakeMove(field, index, isGameEnded);
	if (!movePossible) return; // если нет возможности ходить, то выходим из функции и ход делать не будем

	// Обновляю игровое поле и в ячейку с номером index записываю символ текущего игрока (currentPlayer)
	const newField = [...field];
	newField[index] = currentPlayer;

	// Проверяю победу и запоминаю результат кто победил
	const hasWon = checkWin(newField, currentPlayer);

	// Проверяю ничью и запоминаю результат ничья или нет
	const draw = checkDraw(newField);

	// Обновляю состояние игры
	setField(newField); // Сохраняю обновлённое поле

	if (hasWon) {
		setIsGameEnded(true);
	} else if (draw) {
		setIsDraw(true);
	} else {
		const nextPlayer = switchPlayer(currentPlayer);
		setCurrentPlayer(nextPlayer);
	}
};
