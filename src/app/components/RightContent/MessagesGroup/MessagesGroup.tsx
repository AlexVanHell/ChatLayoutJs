import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { BgDepthColorType } from '../../../common/color/bg-depth-color.type';
import { ColorType } from '../../../common/color/color.type';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import { ThemeContext } from '../../../context/theme.context';
import ConversationImage from '../../ConversationImage/ConversationImage';
import MessageItem, { MessageUnionType } from '../Message/Message';
import styles from './MessagesGroup.scss';

interface MessageGroupImage {
	src?: string;
	text?: string;
}

export interface MessagesGroupProps {
	position: 'left' | 'right';
	items: MessageUnionType[];
	image?: MessageGroupImage;
}

const MessagesGroup = (props: MessagesGroupProps) => {
	const { colors } = useContext(ThemeContext);
	const { position, items, image } = props;

	const color: ColorType | BgDepthColorType =
		position === 'left' ? colors.primary : 'depth-0';

	const imageContent = image ? (
		<div className={styles.imageContainer}>
			<ConversationImage
				text={image.text}
				size={'sm'}
				src={image.src}
				className={styles['bg-purple-300']}
			></ConversationImage>
		</div>
	) : (
		''
	);

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			{position === 'left' && imageContent}
			<div className={styles.content}>
				{items.map((item, index) => (
					<MessageItem
						{...item}
						position={position}
						color={color}
						key={index}
					/>
				))}
			</div>
			{position === 'right' && imageContent}
		</div>
	);
};

MessagesGroup.propTypes = {
	position: PropTypes.oneOf(['left', 'right']).isRequired,
	items: PropTypes.array.isRequired,
} as PropTypeRecord<MessagesGroupProps>;

export default MessagesGroup;
