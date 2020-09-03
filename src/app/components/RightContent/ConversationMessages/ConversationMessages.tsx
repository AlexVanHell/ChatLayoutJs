import React from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
// import PropTypes from 'prop-types'
import styles from './ConversationMessages.scss';

interface ConversationMessagesProps {
	foo?: string;
}

const ConversationMessages = (/* props: ConversationMessagesProps */) => {
	return <div className={styles.container}></div>;
};

ConversationMessages.propTypes = {} as PropTypeRecord<
	ConversationMessagesProps
>;

export default ConversationMessages;
