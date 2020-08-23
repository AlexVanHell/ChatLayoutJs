import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutListItemInterface } from '../../../../types/layout/list/chat-layout-list-item.interface';
import ScrollListener from '../../../HOCs/ScrollListener';
import ConversationItem from '../ConversationItem/ConversationItem';
import styles from './Conversations.scss';

interface ConversationsProps {
	items: ChatLayoutListItemInterface[];
}

const Conversations = (props: ConversationsProps) => {
	const { items } = props;

	return (
		<div className={styles.container}>
			{items.map((item) => (
				<ConversationItem key={item.id} item={item} />
			))}
		</div>
	);
};

Conversations.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ScrollListener(Conversations);
