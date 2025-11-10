import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field = [], onCellClick = () => {} }) => (
	// Чтобы на сайте локалхосте моем отображались элементы разметки, я пропишу значения пропсов по умолчанию
	// то есть если field массив не передан, то использую пустой массив field = [].
	//  Если onCellClick не передан, то использую пустую функцию onCellClick = () => {}
	<div className={styles.field}>
		{field.map((cellValue, index) => (
			<button
				key={index}
				onClick={() => onCellClick(index)}
				className={styles.cellButton}
			>
				{cellValue}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
