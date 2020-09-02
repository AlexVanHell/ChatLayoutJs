import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChatLayout } from '../core/chat-layout';
import { ThemeInterface } from './common/theme/theme.interface';
import MainContainer from './components/MainContainer/MainContainer';
import { LayoutHandlerContext } from './context/layout-handler.context';
import { ThemeContext } from './context/theme.context';

export interface AppProps {
	layoutHandler: ChatLayout;
	theme?: ThemeInterface;
}

class App extends Component<AppProps> {
	static propTypes = {
		layoutHandler: PropTypes.object.isRequired,
		theme: PropTypes.object,
	};

	public render() {
		const { layoutHandler, theme } = this.props;

		const finalTheme: ThemeInterface = {
			style: 'default',
			colors: {
				primary: 'lightblue',
				secondary: 'pink',
				warning: 'amber',
				danger: 'red',
				info: 'teal',
			},
			...theme,
		};

		return (
			<LayoutHandlerContext.Provider value={layoutHandler}>
				<ThemeContext.Provider value={finalTheme}>
					<MainContainer />
				</ThemeContext.Provider>
			</LayoutHandlerContext.Provider>
		);
	}
}

export default App;
