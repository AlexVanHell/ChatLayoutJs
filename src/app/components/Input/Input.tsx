import PropTypes from 'prop-types';
import React, { InputHTMLAttributes } from 'react';
import { ClassNamePropInterface } from '../../common/interface/class-name-prop.interface';
import { FormControlSizeType } from '../../common/size/form-control-size.type';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import styles from './Input.scss';

export interface InputProps extends ClassNamePropInterface {
	type?: 'text' | 'number';
	placeholder?: string;
	uiSize?: FormControlSizeType;
}

const defaultProps: InputProps = {
	type: 'text',
	placeholder: '',
	uiSize: 'md',
};

const Input = (props: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
	const { className, type, placeholder, uiSize } = {
		...defaultProps,
		...props,
	};

	console.log(styles, props);

	return (
		<input
			{...props}
			className={`${styles['form-control']} ${
				styles['form-control-' + uiSize]
			} ${className}`}
			type={type}
			placeholder={placeholder}
		></input>
	);
};

Input.propTypes = {
	type: PropTypes.oneOf(['text', 'number']),
	placeholder: PropTypes.string,
} as PropTypeRecord<InputProps>;

export default Input;
