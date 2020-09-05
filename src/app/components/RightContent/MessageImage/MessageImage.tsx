import React from 'react';
// import PropTypes from 'prop-types'
import styles from './MessageImage.scss';

export interface MessageImageProps {
	src: string;
	alt?: string;
}

const MessageImage = (props: MessageImageProps) => {
	const { src, alt } = props;

	return (
		<div className={styles.container}>
			<img className={styles.image} src={src} alt={alt} />
		</div>
	);
};

MessageImage.propTypes = {};

export default MessageImage;
