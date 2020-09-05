import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFile,
	faFileArchive,
	faFileAudio,
	faFileImage,
	faFileVideo,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Icon from '../../Icon/Icon';
import styles from './MessageFile.scss';

export interface MessageFileProps {
	src: string;
	type?: 'document' | 'audio' | 'video' | 'image' | 'text' | 'archive';
	name?: string;
	backgroundColor?: string;
}

const fileIcons: { [key in MessageFileProps['type']]: IconProp } = {
	document: faFile,
	audio: faFileAudio,
	image: faFileImage,
	video: faFileVideo,
	text: faFile,
	archive: faFileArchive,
};

const MessageFile = (props: MessageFileProps) => {
	const { type, name, backgroundColor }: MessageFileProps = {
		type: 'document',
		...props,
	};
	const icon = fileIcons[type];

	return (
		<div className={styles.container}>
			<div
				className={`${styles.content} ${styles['bg-' + backgroundColor]} ${
					styles.hoverable
				}`}
			>
				<div className={styles.iconContainer}>
					<Icon icon={icon} size={'xl'} />
				</div>
				<div className={styles.details}>
					<p>{name}</p>
				</div>
			</div>
		</div>
	);
};

MessageFile.propTypes = {};

export default MessageFile;
