import PropTypes from 'prop-types';
import React from 'react';
import { ChatLayoutGroupInterface } from '../../../../types/layout/chat-layout-group.interface';
import GroupItem from '../GroupItem/GroupItem';
import styles from './Groups.scss';

interface Props {
  groups: ChatLayoutGroupInterface[];
}

const Groups = (props: Props) => {
  const { groups } = props;

  return (
    <div className={styles.container}>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} />
      ))}
    </div>
  );
};

Groups.propTypes = {
  groups: PropTypes.array.isRequired,
};

export default Groups;
