import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { FormEvent, useContext, useState } from 'react';
import { FormControlSizeType } from '../../common/size/form-control-size.type';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import { ThemeContext } from '../../context/theme.context';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Searchbar.scss';

export interface SearchbarProps {
	showBackButton?: boolean;
	showSearchButton?: boolean;
	inputPlaceholder?: string;
	onInputValueChange: (value: string) => void;
	onBackClick?: () => void;
	onSearchClick?: (value: string) => void;
}

const elementsHeight: FormControlSizeType = 'lg';
const backgroundClass = styles['bg-depth-1'];

const Searchbar = (props: SearchbarProps) => {
	const {
		showBackButton,
		showSearchButton,
		inputPlaceholder: placeholder,
	}: SearchbarProps = {
		showBackButton: true,
		showSearchButton: true,
		inputPlaceholder: 'Search...',
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
			<div className={`${styles.inputWrapper} ${backgroundClass}`}>
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
				<Input
					className={`${styles.searchInput} ${backgroundClass}`}
					type={'text'}
					uiSize={elementsHeight}
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
	inputPlaceholder: PropTypes.string,
	onInputValueChange: PropTypes.func.isRequired,
	onBackClick: PropTypes.func,
	onSearchClick: PropTypes.func,
} as PropTypeRecord<SearchbarProps>;

export default Searchbar;
