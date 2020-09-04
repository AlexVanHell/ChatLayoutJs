import PropTypes from 'prop-types';
import React from 'react';
import { BgDepthColorType } from '../../../common/color/bg-depth-color.type';
import { ColorType } from '../../../common/color/color.type';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import styles from './MessageItem.scss';

export interface MessageItemProps {
	type: 'text' | 'photo' | 'location' | 'document' | 'url';
	color: ColorType | BgDepthColorType;
	position: 'right' | 'left';
	text?: string;
	imageSrc?: string;
}

const MessageItem = (props: MessageItemProps) => {
	const { type, color, position, text, imageSrc } = props;

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			<div className={styles.content}>
				<div className={`${styles.bubble} ${styles['bg-' + color]}`}>
					{type === 'photo' && (
						<div className={styles.multimedia}>
							<img src={imageSrc} alt="landscape" />
						</div>
					)}
					<div className={styles.bubbleContent}>
						<p className={styles.text}>{text}</p>
						<span className={styles.timestamp}>Tue 04:25</span>
					</div>
				</div>
			</div>
		</div>
	);
};

MessageItem.propTypes = {
	type: PropTypes.oneOf(['text', 'photo', 'location', 'document', 'url'])
		.isRequired,
	color: PropTypes.string.isRequired,
	position: PropTypes.oneOf(['left', 'right']).isRequired,
	text: PropTypes.string,
} as PropTypeRecord<MessageItemProps>;

export default MessageItem;
