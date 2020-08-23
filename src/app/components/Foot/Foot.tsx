import React, { Props } from 'react';
import styles from './Foot.scss';

const Foot = (props: Props<any>) => {
	return <div className={styles.container}>{props.children}</div>;
};

Foot.propTypes = {};

export default Foot;
