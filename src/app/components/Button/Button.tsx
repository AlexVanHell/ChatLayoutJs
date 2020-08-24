import React, { ReactNode } from 'react';
import styles from './Button.scss';

interface ButtonProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type?: 'rectangle' | 'square' | 'circle';
	color?:
		| 'none'
		| 'primary'
		| 'secondary'
		| 'info'
		| 'warning'
		| 'danger'
		| 'light';
	className?: string;
	children?: ReactNode;
}

const defaultProps: ButtonProps = {
	size: 'md',
	type: 'rectangle',
	color: 'none',
	className: '',
};

const Button = (props: ButtonProps) => {
	const { size, type, color, className, children } = {
		...defaultProps,
		...props,
	};

	return (
		<button
			className={`${styles.btn} ${styles['btn-' + size]} ${
				styles['btn-' + type]
			} ${styles['btn-' + color]}${className ? ' ' + className : ''}`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {};

export default Button;
