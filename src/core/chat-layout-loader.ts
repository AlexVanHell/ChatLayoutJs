import { initApp } from '../app';
import { ChatLayout } from './chat-layout';

export class ChatLayoutLoader {
	private app: JSX.Element;

	/**
	 * Load the layout inside an speecific element
	 * @param elementNode The element where the chat layout is going to be added
	 */
	public load(elementNode: Element): ChatLayout {
		const layoutHandler = new ChatLayout();
		initApp(elementNode, { layoutHandler });
		return layoutHandler;
	}

	/**
	 * Get the react app instance
	 */
	public getApp() {
		return this.app;
	}
}
