import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import ConversationForm from '../ConversationForm/ConversationForm';
import ConversationMessages from '../ConversationMessages/ConversationMessages';
// import PropTypes from 'prop-types';
import styles from './Conversation.scss';

interface ConversationProps {
	foo?: string;
}

const Conversation = (/* props: ConversationProps */) => {
	return (
		<div className={styles.container}>
			<ConversationMessages />
			<ConversationForm />
		</div>
	);
};

Conversation.propTypes = {} as PropTypeRecord<ConversationProps>;

export default Conversation;
