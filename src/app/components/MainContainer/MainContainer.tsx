import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import RightContent from '../RightContent/RightContent';
import styles from './MainContainer.scss';

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${styles.left}`}>
        <LeftContent />
      </div>
      <div className={`${styles.content} ${styles.right}`}>
        <RightContent />
      </div>
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
