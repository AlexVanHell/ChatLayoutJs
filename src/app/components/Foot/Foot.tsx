import React, { Props } from 'react';
import styles from './Foot.scss';

interface FootProps {
	className?: string;
}

const Foot = (props: FootProps & Props<any>) => {
	const { className } = props;

	return (
		<div className={`${styles.container} ${className || ''}`}>
			{props.children}
		</div>
	);
};

Foot.propTypes = {};

export default Foot;
