import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChatLayout } from '../core/chat-layout';
import MainContainer from './components/MainContainer/MainContainer';
import { LayoutHandlerContext } from './context/layout-handler.context';
import { ThemeContext } from './context/theme.context';
import { ThemeAbstractFactory } from './themes/theme.abstract-factory';

interface AppProps {
	layoutHandler: ChatLayout;
	theme?: string;
}

class App extends Component<AppProps> {
	static propTypes = {
		layoutHandler: PropTypes.object.isRequired,
		theme: PropTypes.string,
	};

	public render() {
		const { layoutHandler, theme } = this.props;

		const themeInstance = new ThemeAbstractFactory().getTheme(theme);

		return (
			<LayoutHandlerContext.Provider value={layoutHandler}>
				<ThemeContext.Provider value={themeInstance}>
					<MainContainer />
				</ThemeContext.Provider>
			</LayoutHandlerContext.Provider>
		);
	}
}

export default App;
