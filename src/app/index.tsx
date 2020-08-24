import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppProps } from './App';

export const initApp = (container: Element, props: AppProps) => {
	ReactDOM.render(<App {...props} />, container);
};
