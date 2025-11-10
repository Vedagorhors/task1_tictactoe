import { WIN_PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some(
		(pattern) => pattern.every((position) => field[position] === currentPlayer),
		// const pattern = [0, 1, 2];  // Это массив чисел (индексов)
		// pattern.every((pattern) => { ... })
		// JavaScript передаёт в pattern 0, потом 1, потом 2:
		// Эти числа - значения элементов массива pattern
		// Но мы используем их как индексы для field[position]

		// position - это позиция в игровом поле
	);
