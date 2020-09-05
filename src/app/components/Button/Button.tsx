import { IconProp } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import React, { ButtonHTMLAttributes, Fragment } from 'react';
import { BgDepthColorType } from '../../common/color/bg-depth-color.type';
import { ColorLevelType } from '../../common/color/color-level.type';
import { ColorType } from '../../common/color/color.type';
import { FormControlSizeType } from '../../common/size/form-control-size.type';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import Icon, { IconProps } from '../Icon/Icon';
import styles from './Button.scss';

interface ButtonIconOptions {
	position?: 'left' | 'right';
	size?: IconProps['size'];
}

type ButtonShapeType = '' | 'square' | 'circle';

type ButtonColorType = '' | 'transparent' | ColorType | BgDepthColorType;

type ButtonColorLevelType = '' | ColorLevelType;
export interface ButtonProps {
	size?: FormControlSizeType;
	shape?: ButtonShapeType;
	color?: ButtonColorType;
	colorLevel?: ButtonColorLevelType;
	textColor?: ButtonColorType;
	hoverable?: boolean;
	icon?: IconProp;
	iconOptions?: ButtonIconOptions;
}

const defaultProps: ButtonProps = {
	size: 'md',
	shape: '',
	color: '',
	colorLevel: '',
	textColor: '',
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
		textColor,
		icon,
		iconOptions,
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

	const finalColor = `${color || 'transparent'}${
		colorLevel ? '-' + colorLevel : ''
	}`;
	finalClassName += ` ${styles['bg-' + finalColor]}`;

	if (hoverable) {
		finalClassName += ` ${styles.hoverable}`;
	}

	if (className) {
		finalClassName += ` ${className}`;
	}

	if (textColor) {
		finalClassName += ` ${styles['text-' + textColor]}`;
	}

	let innerContent = children;

	if (icon) {
		if (iconOptions) {
			const iconContent = (
				<Icon
					icon={icon}
					size={iconOptions.size}
					className={`${styles.icon} ${
						iconOptions.position ? styles[iconOptions.position] : ''
					}`}
				/>
			);

			if (iconOptions.position === 'left') {
				innerContent = (
					<Fragment>
						{iconContent}
						{children}
					</Fragment>
				);
			} else {
				innerContent = (
					<Fragment>
						{children}
						{iconContent}
					</Fragment>
				);
			}
		} else {
			innerContent = <Icon className={styles.icon} icon={icon as IconProp} />;
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
	textColor: PropTypes.string,
	hoverable: PropTypes.bool,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	iconOptions: PropTypes.object,
} as PropTypeRecord<ButtonProps>;

export default Button;
