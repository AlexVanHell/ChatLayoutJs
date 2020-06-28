import React, { Props } from 'react';
import styles from './Head.scss';

const Head = (props: Props<any>) => {
  return <div className={styles.container}>{props.children}</div>;
};

Head.propTypes = {};

export default Head;
