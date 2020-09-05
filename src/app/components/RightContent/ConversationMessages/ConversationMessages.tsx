import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import { TEST_MESSAGES_MOCK } from '../../../mock/test-messages';
import MessagesGroup from '../MessagesGroup/MessagesGroup';
// import PropTypes from 'prop-types'
import styles from './ConversationMessages.scss';

interface ConversationMessagesProps {
	foo?: string;
}

const ConversationMessages = (/* props: ConversationMessagesProps */) => {
	const messageGroups = TEST_MESSAGES_MOCK;

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
