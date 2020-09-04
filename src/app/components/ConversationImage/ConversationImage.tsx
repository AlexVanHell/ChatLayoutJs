import PropTypes from 'prop-types';
import React from 'react';
import { ClassNamePropInterface } from '../../common/interface/class-name-prop.interface';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import styles from './ConversationImage.scss';

interface ConversationImageProps extends ClassNamePropInterface {
	src?: string;
	text?: string;
	size?: 'sm' | 'md' | 'lg';
	backgroundColor?: string;
}

const defaultProps: ConversationImageProps = {
	src: '',
	text: '',
	size: 'md',
	backgroundColor: '',
};

const ConversationImage = (props: ConversationImageProps) => {
	const { src, text, size, backgroundColor, className } = {
		...defaultProps,
		...props,
	};

	return (
		<div
			style={{ backgroundColor }}
			className={`${styles.container} ${styles['img-' + size]} ${className}`}
		>
			{text && (
				<span className={`${styles.textContainer} ${styles['text-white']}`}>
					{text}
				</span>
			)}
			{src && <img src={src} alt="Photo" />}
		</div>
	);
};

ConversationImage.propTypes = {
	src: PropTypes.string.isRequired,
} as PropTypeRecord<ConversationImageProps>;

export default ConversationImage;
