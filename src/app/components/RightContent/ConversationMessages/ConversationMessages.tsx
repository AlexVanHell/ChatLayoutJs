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
					type: 'text',
					text: 'Hello world',
				},
			],
		},
		{
			position: 'left',
			items: [
				{
					type: 'text',
					text: 'Hello world',
				},
				{
					type: 'text',
					text: 'Hello world',
				},
			],
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{messageGroups.map((mg, index) => (
					<MessagesGroup {...mg} showImage={true} key={index} />
				))}
			</div>
		</div>
	);
};

ConversationMessages.propTypes = {} as PropTypeRecord<
	ConversationMessagesProps
>;

export default ConversationMessages;
