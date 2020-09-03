import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { BgDepthColorType } from '../../../common/color/bg-depth-color.type';
import { ColorType } from '../../../common/color/color.type';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import { ThemeContext } from '../../../context/theme.context';
import ConversationImage from '../../ConversationImage/ConversationImage';
import styles from './MessageItem.scss';

export interface MessageItemProps {
	type: 'text' | 'photo' | 'location' | 'document' | 'url';
	text?: string;
	position: 'left' | 'right';
	showImage?: boolean;
}

const MessageItem = (props: MessageItemProps) => {
	const { colors } = useContext(ThemeContext);
	const { text, position, showImage } = props;

	const color: ColorType | BgDepthColorType =
		position === 'left' ? 'depth-0' : colors.primary;

	const imageContent = showImage ? (
		<div className={styles.imageContainer}>
			<ConversationImage
				text={'AV'}
				size={'sm'}
				className={styles['bg-purple-300']}
			></ConversationImage>
		</div>
	) : (
		''
	);

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			<div
				className={styles.content}
				style={{ padding: `0 ${showImage ? 0 : '28px'}` }}
			>
				{position === 'left' && imageContent}
				<div className={`${styles.bubble} ${styles['bg-' + color]}`}>
					<p className={styles.text}>{text}</p>
					<span className={styles.timestamp}>Tue 04:25</span>
				</div>
				{position === 'right' && imageContent}
			</div>
		</div>
	);
};

MessageItem.propTypes = {
	type: PropTypes.oneOf(['text', 'photo', 'location', 'document', 'url'])
		.isRequired,
	position: PropTypes.oneOf(['left', 'right']).isRequired,
	text: PropTypes.string,
} as PropTypeRecord<MessageItemProps>;

export default MessageItem;
