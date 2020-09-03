import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { FormEvent, useContext, useState } from 'react';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import { ThemeContext } from '../../context/theme.context';
import Button from '../Button/Button';
import styles from './Searchbar.scss';

export interface SearchbarProps {
	showBackButton?: boolean;
	showSearchButton?: boolean;
	placeholder?: string;
	onInputValueChange: (value: string) => void;
	onBackClick?: () => void;
	onSearchClick?: (value: string) => void;
}

const elementsHeight = 'lg';

const Searchbar = (props: SearchbarProps) => {
	const { showBackButton, showSearchButton, placeholder }: SearchbarProps = {
		showBackButton: true,
		showSearchButton: true,
		placeholder: 'Search...',
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
			<div className={`${styles.inputWrapper} ${styles['bg-depth-1']}`}>
				{/* Back button */}
				{showBackButton && (
					<Button
						shape={'square'}
						size={elementsHeight}
						color={'depth-1'}
						className={`${styles.backButton}`}
						icon={faArrowLeft}
						onClick={handleBackClick}
					/>
				)}
				{/* Text input */}
				<Button shape={'square'} icon={faSearch} hoverable={false} disabled />
				<input
					type="text"
					className={showBackButton ? styles.backSibling : ''}
					placeholder={placeholder}
					value={value}
					onInput={handleInput}
				/>
			</div>
			{/* Search button */}
			{showSearchButton && (
				<Button
					className={styles.searchButton}
					size={elementsHeight}
					color={colors.secondary}
					icon={faSearch}
					onClick={handleSearchClick}
					title="Search"
				/>
			)}
		</div>
	);
};

Searchbar.propTypes = {
	showBackButton: PropTypes.bool,
	showSearchButton: PropTypes.bool,
	placeholder: PropTypes.string,
	onInputValueChange: PropTypes.func.isRequired,
	onBackClick: PropTypes.func,
	onSearchClick: PropTypes.func,
} as PropTypeRecord<SearchbarProps>;

export default Searchbar;
