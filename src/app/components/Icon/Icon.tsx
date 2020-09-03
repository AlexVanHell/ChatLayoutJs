import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { ClassNamePropInterface } from '../../common/interface/class-name-prop.interface';
import { PropTypeRecord } from '../../common/type/prop-type-record.type';
import styles from './Icon.scss';

export interface IconProps extends ClassNamePropInterface {
	size?: '' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	icon: IconProp;
}

const Icon = (props: IconProps) => {
	const { className, icon } = props;
	let { size } = props;

	if (!size) {
		size = 'md';
	}

	return (
		<FontAwesomeIcon
			icon={icon}
			className={`${styles.icon} ${styles['icon-' + size]} ${className}`}
		></FontAwesomeIcon>
	);
};

Icon.propTypes = {
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	size: PropTypes.oneOf(['', 'sm', 'md', 'lg']).isRequired,
} as PropTypeRecord<IconProps>;

export default Icon;
