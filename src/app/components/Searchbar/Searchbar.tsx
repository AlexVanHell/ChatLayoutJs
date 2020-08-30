import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';
import styles from './Searchbar.scss';

export interface SearchbarProps {
	onInputValueChange: (value: string) => void;
}

const Searchbar = (props: SearchbarProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.backButton}>
				<Button
					size={'sm'}
					type={'circle'}
					className={`${styles['bg-depth-1']} ${styles.hoverable}`}
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
		</div>
	);
};

Searchbar.propTypes = { ...Searchbar.propTypes };

export default Searchbar;
