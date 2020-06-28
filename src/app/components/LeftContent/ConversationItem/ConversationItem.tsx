import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutListItemInterface } from '../../../../types/layout/list/chat-layout-list-item.interface';
import styles from './ConversationItem.scss';

interface Props {
  item: ChatLayoutListItemInterface;
}

const ConversationItem = (props: Props) => {
  const { item } = props;

  return <div className={styles.container}>{item.id}</div>;
};

ConversationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ConversationItem;
