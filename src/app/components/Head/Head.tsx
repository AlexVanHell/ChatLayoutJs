import React, { Props } from 'react';
import styles from './Head.scss';

interface HeadProps {
	className?: string;
}

const Head = (props: HeadProps & Props<any>) => {
	const { className } = props;

	return (
		<div className={`${styles.container} ${className || ''}`}>
			{props.children}
		</div>
	);
};

Head.propTypes = {};

export default Head;
