import PropTypes from 'prop-types';
import styles from './game.module.css';
import { Information, Field } from './components';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
	onRestart,
}) => (
	<div className={styles.game}>
		<Information
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
		<Field field={field} onCellClick={onCellClick} />
		<button onClick={onRestart} className={styles.restartButton}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
	onRestart: PropTypes.func.isRequired,
};
