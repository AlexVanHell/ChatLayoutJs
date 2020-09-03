import React, { useContext, useState } from 'react';
import { ChatLayoutGroupInterface } from '../../../types/layout/chat-layout-group.interface';
import { LayoutHandlerContext } from '../../context/layout-handler.context';
import Foot from '../Foot/Foot';
import Head from '../Head/Head';
import Searchbar from '../Searchbar/Searchbar';
import Conversations from './Conversations/Conversations';
import styles from './LeftContent.scss';
import LeftTitle from './LeftTitle/LeftTitle';

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
		<div className={`${styles.container} ${styles['bg-depth-0']}`}>
			<Head>
				<LeftTitle />
				<Searchbar onInputValueChange={handleSearchInputValueChange} />
			</Head>
			{/* <Groups groups={groups} /> */}
			<Foot /* className={styles['bg-depth-1']} */>
				<Conversations items={state.items} />
			</Foot>
		</div>
	);
};

LeftContent.propTypes = {};

export default LeftContent;
