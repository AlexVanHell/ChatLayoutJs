import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import Button from '../Button/Button';
import styles from './Searchbar.scss';

export interface SearchbarProps {
	onInputValueChange: (value: string) => void;
	onBackClick: () => void;
}

const Searchbar = (props: SearchbarProps) => {
	const { colors } = useContext(ThemeContext);

	return (
		<div className={styles.container}>
			<div className={styles.backButton}>
				<Button
					shape={'circle'}
					className={`${styles['bg-depth-2']} ${styles.hoverable}`}
					onClick={() => props.onBackClick()}
				>
					<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
				</Button>
			</div>
			<input
				type="text"
				className={styles['bg-depth-0']}
				placeholder="Search"
				onInput={(e) => props.onInputValueChange(e.currentTarget.value)}
			/>
			<div className={styles.searchButton}>
				<Button
					color={colors.secondary}
					onClick={() => props.onBackClick()}
					title="Search"
				>
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</Button>
			</div>
		</div>
	);
};

Searchbar.propTypes = {
	onInputValueChange: PropTypes.func.isRequired,
	onBackClick: PropTypes.func.isRequired,
};

export default Searchbar;
