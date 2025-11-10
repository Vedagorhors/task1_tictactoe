import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	// определяю статус игры
	let statusMessage;
	if (isDraw) {
		statusMessage = 'Ничья';
	} else if (isGameEnded) {
		statusMessage = `Победа: ${currentPlayer}`;
	} else {
		statusMessage = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout statusMessage={statusMessage} />;
};

Information.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
