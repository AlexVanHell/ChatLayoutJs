import React from 'react';
import LeftHead from '../../HOCs/LeftHead/LeftHead';

const DefaultLeftHead = () => {
	return <div>Hello from default</div>;
};

DefaultLeftHead.propTypes = { ...LeftHead.propTypes };

export default DefaultLeftHead;
