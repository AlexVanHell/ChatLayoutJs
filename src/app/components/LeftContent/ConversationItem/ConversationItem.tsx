import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutListItemInterface } from '../../../../types/layout/list/chat-layout-list-item.interface';
import Button from '../../Button/Button';
import ConversationImage from '../../ConversationImage/ConversationImage';
import styles from './ConversationItem.scss';

export interface ConversationItemProps {
	item: ChatLayoutListItemInterface;
}

const ConversationItem = (/* props: ConversationItemProps */) => {
	// const { item } = props;

	const testText = `Hello world this is a test text, multiple lines allowed`;

	return (
		<div
			className={`${styles.container} ${styles['bg-depth-0']} ${styles.hoverable}`}
		>
			<div className={styles.imageContainer}>
				<ConversationImage
					text={'AV'}
					size={'lg'}
					className={styles['bg-lightblue']}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.contentTop}>
					<h4 className={styles.title}>Usuario chido</h4>
					<Button
						size={'sm'}
						shape={'circle'}
						className={`${styles.moreButton} ${styles['bg-depth-0']} ${styles['bg-depth-hover-2']}`}
						icon={faEllipsisV}
					/>
				</div>
				<p className={`${styles.contentText} ${styles['text-muted']}`}>
					{testText}
				</p>
				<span className={`${styles.contentTimestamp} ${styles['text-muted']}`}>
					04:25
				</span>
			</div>
		</div>
	);
};

ConversationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ConversationItem;
