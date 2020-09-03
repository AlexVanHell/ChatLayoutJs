import { faInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import Button from '../../Button/Button';
import ConversationImage from '../../ConversationImage/ConversationImage';
import styles from './RightTitle.scss';

interface RightTitleProps {
	onSearchButtonClick?: () => void;
	onInfoButtonClick?: () => void;
}

const RightTitle = (props: RightTitleProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.userContainer}>
				<ConversationImage
					className={styles.userPhoto}
					text={'AV'}
					/* imageSrc={
						'https://avatars1.githubusercontent.com/u/9507905?s=460&u=b094cf1970ae52bbd089ce48027f73374b416bd3&v=4'
					} */
				/>
				<div className={styles.userName}>
					<h3 className={styles.title}>Usuario chido</h3>
					<h5 className={`${styles.subtitle} ${styles['text-muted']}`}>
						Subtitulo
					</h5>
				</div>
			</div>
			<div className={styles.buttonsContainer}>
				<Button
					shape={'circle'}
					size={'lg'}
					icon={faSearch}
					onClick={props.onSearchButtonClick}
				/>
				<Button
					shape={'circle'}
					size={'lg'}
					icon={faInfo}
					onClick={props.onInfoButtonClick}
				/>
			</div>
		</div>
	);
};

RightTitle.propTypes = {
	onSearchButtonClick: PropTypes.func,
	onInfoButtonClick: PropTypes.func,
} as PropTypeRecord<RightTitleProps>;

export default RightTitle;
