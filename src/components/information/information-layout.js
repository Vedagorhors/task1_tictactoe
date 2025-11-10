import PropTypes from 'prop-types';
import styles from './information.module.css';

export const InformationLayout = ({ statusMessage }) => (
	<div className={styles.information}>
		<p>{statusMessage}</p>
	</div>
);

InformationLayout.propTypes = {
	statusMessage: PropTypes.string.isRequired,
};
