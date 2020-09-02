import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme.context';
import Button from '../Button/Button';
import styles from './Searchbar.scss';

export interface SearchbarProps {
	showBackButton?: boolean;
	showSearchButton?: boolean;
	onInputValueChange: (value: string) => void;
	onBackClick?: () => void;
	onSearchClick?: (value: string) => void;
}

const Searchbar = (props: SearchbarProps) => {
	const { showBackButton, showSearchButton } = {
		showBackButton: true,
		showSearchButton: true,
		...props,
	};
	const { colors } = useContext(ThemeContext);
	const [value, setValue] = useState('');

	const handleBackClick = () => {
		if (typeof props.onBackClick === 'function') {
			props.onBackClick();
		}
	};

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		const inputValue = event.currentTarget.value;

		setValue(inputValue);
		props.onInputValueChange(inputValue);
	};

	const handleSearchClick = () => {
		if (typeof props.onSearchClick === 'function') {
			props.onSearchClick(value);
		}
	};

	return (
		<div className={styles.container}>
			{/* Back button */}
			{showBackButton && (
				<div className={styles.backButton}>
					<Button
						shape={'circle'}
						hoverable={false}
						className={`${styles['bg-depth-2']} ${styles.hoverable}`}
						onClick={handleBackClick}
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</Button>
				</div>
			)}
			{/* Text input */}
			<input
				type="text"
				className={styles['bg-depth-0']}
				placeholder="Search"
				value={value}
				onInput={handleInput}
			/>
			{/* Search button */}
			{showSearchButton && (
				<div className={styles.searchButton}>
					<Button
						color={colors.secondary}
						onClick={handleSearchClick}
						title="Search"
					>
						<FontAwesomeIcon icon={faSearch} />
					</Button>
				</div>
			)}
		</div>
	);
};

Searchbar.propTypes = {
	showBackButton: PropTypes.bool,
	showSearchButton: PropTypes.bool,
	onInputValueChange: PropTypes.func.isRequired,
	onBackClick: PropTypes.func.isRequired,
};

export default Searchbar;
