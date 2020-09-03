import React from 'react';
import Foot from '../Foot/Foot';
import Head from '../Head/Head';
import Searchbar from '../Searchbar/Searchbar';
import Conversation from './Conversation/Conversation';
import styles from './RightContent.scss';
import RightTitle from './RightTitle/RightTitle';

const RightContent = () => {
	const handleSearchInputValueChange = (value: string) => {
		console.log(value);
	};

	return (
		<div className={styles.container}>
			<Head className={styles['bg-depth-0']}>
				<RightTitle />
				<Searchbar onInputValueChange={handleSearchInputValueChange} />
			</Head>
			<Foot>
				<Conversation />
			</Foot>
		</div>
	);
};

RightContent.propTypes = {};

export default RightContent;
