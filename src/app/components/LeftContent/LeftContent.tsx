import React, { useContext, useState } from 'react';
import { ChatLayoutGroupInterface } from '../../../types/layout/chat-layout-group.interface';
import { LayoutHandlerContext } from '../../context/layout-handler.context';
import Foot from '../Foot/Foot';
import Searchbar from '../Searchbar/Searchbar';
import Conversations from './Conversations/Conversations';
import Groups from './Groups/Groups';
import styles from './LeftContent.scss';
import LeftTopContent from './TopContent/LeftTopContent';

const LeftContent = () => {
	const layoutHandler = useContext(LayoutHandlerContext);
	const groups = layoutHandler.groups;
	const [state] = useState<ChatLayoutGroupInterface>(
		groups[0] || ({ items: [] } as ChatLayoutGroupInterface),
	);

	const handleSearchInputValueChange = (value: string) => {
		console.log(value);
	};

	return (
		<div className={`${styles.container} ${styles['bg-depth-1']}`}>
			<div className={styles.top}>
				<LeftTopContent></LeftTopContent>
				<Searchbar onInputValueChange={handleSearchInputValueChange} />
			</div>
			<Groups groups={groups} />
			<Foot>
				<Conversations items={state.items} />
			</Foot>
		</div>
	);
};

LeftContent.propTypes = {};

export default LeftContent;
