import PropTypes from 'prop-types';
import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import MessageItem from '../MessageItem/MessageItem';
import styles from './MessagesGroup.scss';

export interface MessagesGroupProps {
	position: 'left' | 'right';
	items: {
		type: 'text' | 'photo' | 'location' | 'document' | 'url';
		text?: string;
	}[];
	showImage?: boolean;
}

const MessagesGroup = (props: MessagesGroupProps) => {
	const { position, items, showImage } = props;

	return (
		<div className={`${styles.container} ${styles[position]}`}>
			{items.map((item, index) => (
				<MessageItem
					{...item}
					position={position}
					showImage={index === items.length - 1 && showImage}
					key={index}
				/>
			))}
		</div>
	);
};

MessagesGroup.propTypes = {
	position: PropTypes.oneOf(['left', 'right']).isRequired,
	items: PropTypes.array.isRequired,
} as PropTypeRecord<MessagesGroupProps>;

export default MessagesGroup;
