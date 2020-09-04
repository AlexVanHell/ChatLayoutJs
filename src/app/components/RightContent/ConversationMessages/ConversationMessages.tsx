import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import MessagesGroup, {
	MessagesGroupProps,
} from '../MessagesGroup/MessagesGroup';
// import PropTypes from 'prop-types'
import styles from './ConversationMessages.scss';

interface ConversationMessagesProps {
	foo?: string;
}

const ConversationMessages = (/* props: ConversationMessagesProps */) => {
	const messageGroups: MessagesGroupProps[] = [
		{
			position: 'right',
			items: [
				{
					type: 'text',
					text: 'Hello world',
				},
				{
					type: 'photo',
					text: 'Hello world',
					imageSrc:
						'https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg',
				},
			],
			image: {
				text: 'AV',
			},
		},
		{
			position: 'left',
			items: [
				{
					type: 'photo',
					text:
						'Hello world, this is a longer text for testing photos. Lorem ipsum dolor sit amet',
					imageSrc:
						'https://i.pinimg.com/originals/63/31/43/63314356111086235a76d77849ff224d.jpg',
				},
				{
					type: 'text',
					text: 'Hello world',
				},
			],
			image: {
				text: 'AV',
			},
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.scroll}>
				<div className={styles.content}>
					{messageGroups.map((mg, index) => (
						<MessagesGroup {...mg} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

ConversationMessages.propTypes = {} as PropTypeRecord<
	ConversationMessagesProps
>;

export default ConversationMessages;
