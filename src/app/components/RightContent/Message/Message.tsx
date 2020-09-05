import PropTypes from 'prop-types';
import React from 'react';
import { BgDepthColorType } from '../../../common/color/bg-depth-color.type';
import { ColorType } from '../../../common/color/color.type';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import MessageFile, { MessageFileProps } from '../MessageFile/MessageFile';
import MessageImage, { MessageImageProps } from '../MessageImage/MessageImage';
import MessageLocation, {
	MessageLocationProps,
} from '../MessageLocation/MessageLocation';
import styles from './Message.scss';

export interface MessageInterface {
	type: 'text' | 'photo' | 'location' | 'file' | 'url';
	text?: string;
	content?: any;
}

interface MessageTextInterface extends MessageInterface {
	type: 'text';
	text: string;
}

interface MessageFileInterface extends MessageInterface {
	type: 'file';
	content: MessageFileProps;
}

interface MessagePhotoInterface extends MessageInterface {
	type: 'photo';
	content: MessageImageProps;
}

interface MessageLocationInterface extends MessageInterface {
	type: 'location';
	content: MessageLocationInterface;
}

interface MessageUrlInterface extends MessageInterface {
	type: 'url';
	content: {
		url: string;
	};
}

export type MessageUnionType =
	| MessageTextInterface
	| MessageFileInterface
	| MessagePhotoInterface
	| MessageLocationInterface
	| MessageUrlInterface;

export type MessageProps = {
	position: 'right' | 'left';
	color: ColorType | BgDepthColorType;
} & MessageUnionType;

const MessageItem = (props: MessageProps) => {
	const { position, color, text, type, content } = props;

	let mediaContent: JSX.Element = null;

	if (type === 'photo') {
		mediaContent = <MessageImage {...(content as MessageImageProps)} />;
	} else if (type === 'file') {
		const fileBackgroundColor =
			position === 'left' ? `${color}-700` : 'depth-1';

		mediaContent = (
			<MessageFile
				{...(content as MessageFileProps)}
				backgroundColor={fileBackgroundColor}
			/>
		);
	} else if (type === 'location') {
		mediaContent = <MessageLocation {...(content as MessageLocationProps)} />;
	}

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			<div className={styles.content}>
				<div className={`${styles.bubble} ${styles['bg-' + color]}`}>
					{type !== 'text' && (
						<div className={styles.multimedia}>{mediaContent}</div>
					)}
					<div className={styles.bubbleContent}>
						{text && <p className={styles.text}>{text}</p>}
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
	body: PropTypes.string,
	content: PropTypes.object,
} as PropTypeRecord<MessageProps>;

export default MessageItem;
