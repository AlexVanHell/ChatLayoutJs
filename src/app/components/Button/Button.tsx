import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { ButtonHTMLAttributes } from 'react';
import { ColorLevelType } from '../../common/theme/color-level.type';
import { ColorType } from '../../common/theme/color.type';
import styles from './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<any> {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	shape?: '' | 'square' | 'circle';
	color?: '' | ColorType;
	colorLevel?: '' | ColorLevelType;
	hoverable?: boolean;
	icon?: IconProp | { position: 'left' | 'right'; name: IconProp };
}

const defaultProps: ButtonProps = {
	size: 'md',
	shape: '',
	color: '',
	colorLevel: '',
	hoverable: true,
};

const Button = (props: ButtonProps) => {
	const { size, shape, color, colorLevel, hoverable, className, children } = {
		...defaultProps,
		...props,
	};

	let finalClassName = `${styles.btn} ${styles['btn-' + size]}`;

	if (shape) {
		finalClassName += ` ${styles['btn-' + shape]}`;
	}

	if (color) {
		const finalColor = `${color}${colorLevel ? '-' + colorLevel : ''}`;
		finalClassName += ` ${styles['btn-' + finalColor]}`;
	}

	if (hoverable) {
		finalClassName += ` ${styles.hoverable}`;
	}

	if (className) {
		finalClassName += ` ${className}`;
	}

	return (
		<button {...props} className={finalClassName}>
			{children}
		</button>
	);
};

Button.propTypes = {};

export default Button;
