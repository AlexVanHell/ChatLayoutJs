import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from '../../Button/Button';
import styles from './LeftTitle.scss';

const LeftTopContent = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Conversaciones</h2>
			<div className={styles.buttonsContainer}>
				<Button shape={'circle'} size={'lg'} icon={faSearch} />
				<Button shape={'circle'} size={'lg'} icon={faEdit} />
			</div>
		</div>
	);
};

LeftTopContent.propTypes = {};

export default LeftTopContent;
