import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutGroupInterface } from '../../../../types/layout/chat-layout-group.interface';
import styles from './GroupItem.scss';

interface GroupItemProps {
  group: ChatLayoutGroupInterface;
}

const GroupItem = (props: GroupItemProps) => {
  const { group } = props;

  return (
    <div className={styles.container}>
      <h5>{group.name}</h5>
    </div>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
};

export default GroupItem;
