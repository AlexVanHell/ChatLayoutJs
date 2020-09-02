import { faCity, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../Button/Button';
import styles from './LeftTopContent.scss';

const LeftTopContent = () => {
	return (
		<div className={styles.container}>
			<h3>Conversaciones</h3>
			<div className={styles.buttonsContainer}>
				<Button shape={'circle'} size={'lg'}>
					<FontAwesomeIcon icon={faSearch} />
				</Button>
				<Button shape={'circle'} size={'lg'}>
					<FontAwesomeIcon icon={faCity} />
				</Button>
			</div>
		</div>
	);
};

LeftTopContent.propTypes = {};

export default LeftTopContent;
