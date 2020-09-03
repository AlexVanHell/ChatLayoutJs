import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { ButtonHTMLAttributes, Fragment } from 'react';
import { BgDepthColorType } from '../../common/color/bg-depth-color.type';
import { ColorLevelType } from '../../common/color/color-level.type';
import { ColorType } from '../../common/color/color.type';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import styles from './Button.scss';

interface ButtonIconInterface {
	position: 'left' | 'right';
	variant: IconProp;
}

type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonShapeType = '' | 'square' | 'circle';

type ButtonColorType = '' | ColorType | BgDepthColorType;

type ButtonColorLevelType = '' | ColorLevelType;
interface ButtonProps {
	size?: ButtonSizeType;
	shape?: ButtonShapeType;
	color?: ButtonColorType;
	colorLevel?: ButtonColorLevelType;
	hoverable?: boolean;
	icon?: IconProp | ButtonIconInterface;
}

const defaultProps: ButtonProps = {
	size: 'md',
	shape: '',
	color: '',
	colorLevel: '',
	hoverable: true,
};

const Button = (
	props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
	const {
		size,
		shape,
		color,
		colorLevel,
		icon,
		hoverable,
		className,
		children,
	} = {
		...defaultProps,
		...props,
	};

	let finalClassName = `${styles.btn} ${styles['btn-' + size]}`;

	if (shape) {
		finalClassName += ` ${styles['btn-' + shape]}`;
	}

	if (color) {
		const finalColor = `${color}${colorLevel ? '-' + colorLevel : ''}`;
		finalClassName += ` ${styles['bg-' + finalColor]}`;
	}

	if (hoverable) {
		finalClassName += ` ${styles.hoverable}`;
	}

	if (className) {
		finalClassName += ` ${className}`;
	}

	let innerContent = children;

	if (icon) {
		if ((icon as ButtonIconInterface).position === 'left') {
			innerContent = (
				<Fragment>
					<FontAwesomeIcon
						className={`${styles.icon} ${styles.left}`}
						icon={(icon as ButtonIconInterface).variant}
					/>
					{children}
				</Fragment>
			);
		} else if ((icon as ButtonIconInterface).position === 'right') {
			innerContent = (
				<Fragment>
					{children}
					<FontAwesomeIcon
						className={`${styles.icon} ${styles.right}`}
						icon={(icon as ButtonIconInterface).variant}
					/>
				</Fragment>
			);
		} else {
			innerContent = (
				<FontAwesomeIcon className={styles.icon} icon={icon as IconProp} />
			);
		}
	}

	return (
		<button {...props} className={finalClassName}>
			{innerContent}
		</button>
	);
};

Button.propTypes = {
	size: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg', 'xl']),
	shape: PropTypes.oneOf(['', 'square', 'circle']),
	color: PropTypes.string,
	colorLevel: PropTypes.string,
	hoverable: PropTypes.bool,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
} as PropTypeRecord<ButtonProps>;

export default Button;
