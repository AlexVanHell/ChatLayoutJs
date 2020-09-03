import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutListItemInterface } from '../../../../types/layout/list/chat-layout-list-item.interface';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
// import ScrollListener from '../../../HOCs/ScrollListener';
import ConversationItem from '../ConversationItem/ConversationItem';
import styles from './Conversations.scss';

interface ConversationsProps {
	items: ChatLayoutListItemInterface[];
}

const Conversations = (props: ConversationsProps) => {
	const { items } = props;

	return (
		<div className={styles.container}>
			<ConversationItem item={null} />
			{/* {items.map((item) => (
				<ConversationItem key={item.id} item={item} />
			))} */}
		</div>
	);
};

Conversations.propTypes = {
	items: PropTypes.array.isRequired,
} as PropTypeRecord<ConversationsProps>;

export default Conversations;
