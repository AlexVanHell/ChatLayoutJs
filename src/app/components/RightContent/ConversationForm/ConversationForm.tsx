import {
	faCamera,
	faChevronRight,
	faFile,
	faMapMarkerAlt,
	faPaperPlane,
	faPlus,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { PropTypeRecord } from '../../../common/type/prop-type-record.type';
import { ThemeContext } from '../../../context/theme.context';
import Button, { ButtonProps } from '../../Button/Button';
// import PropTypes from 'prop-types'
import styles from './ConversationForm.scss';

interface ConversationFormProps {
	foo?: string;
}

const ConversationForm = (/* props: ConversationFormProps */) => {
	const { colors } = useContext(ThemeContext);

	const actionButtonProps: ButtonProps = { shape: 'circle', size: 'lg' };
	const actionButtons: {
		name: string;
		title: string;
		icon: IconDefinition;
	}[] = [
		{
			name: 'photo',
			title: 'Upload photo',
			icon: faCamera,
		},
		{
			name: 'document',
			title: 'Upload document',
			icon: faFile,
		},
		{
			name: 'location',
			title: 'Upload location',
			icon: faMapMarkerAlt,
		},
		{
			name: 'other',
			title: 'Upload other',
			icon: faPlus,
		},
	];

	return (
		<div className={`${styles.container} ${styles['bg-depth-0']}`}>
			<div className={styles.actionButtons}>
				{actionButtons.map((button) => (
					<Button
						key={button.name}
						{...actionButtonProps}
						textColor={colors.primary}
						icon={button.icon}
						iconOptions={{ size: 'lg' }}
						title={button.title}
					/>
				))}
				<Button
					{...actionButtonProps}
					icon={faChevronRight}
					title={'Expand options'}
				/>
			</div>
			<textarea
				className={`${styles.messageInput} ${styles['bg-depth-1']}`}
				rows={1}
				placeholder={'Write something...'}
			></textarea>
			<Button
				className={styles.sendButton}
				color={colors.primary}
				size={'lg'}
				icon={faPaperPlane}
				iconOptions={{ position: 'right' }}
			>
				Send
			</Button>
		</div>
	);
};

ConversationForm.propTypes = {} as PropTypeRecord<ConversationFormProps>;

export default ConversationForm;
