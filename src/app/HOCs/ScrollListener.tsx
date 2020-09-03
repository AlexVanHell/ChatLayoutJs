import React, { ComponentType, UIEvent } from 'react';

const ScrollListener = <P extends { [key: string]: any }>(
	Component: ComponentType<P>,
) => (props: P) => {
	// const [scrollPos, setScrollPos] = useState(0);
	const handleScroll = (event: UIEvent<HTMLDivElement>) => {
		console.log(event);
		console.log(event.currentTarget.scrollTop);
		console.log(event.currentTarget.scrollHeight);
	};
	let divRef: HTMLDivElement = null;

	const style = {
		width: '100%',
		height: '100%',
	};

	return (
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		<div style={style} onScroll={handleScroll} ref={(ref) => (divRef = ref)}>
			<Component {...props} />
		</div>
	);
};

export default ScrollListener;
