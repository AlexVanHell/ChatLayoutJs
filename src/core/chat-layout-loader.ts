import { render } from 'preact';
import React from 'react';
import ChatLayoutComponent from '../components/ChatLayoutComponent';
import { ChatLayout } from './chat-layout';

export class ChatLayoutLoader {
  private app: JSX.Element;

  /**
   * Load the layout inside an speecific element
   * @param elementNode The element where the chat layout is going to be added
   */
  load(elementNode: Element): ChatLayout {
    const handler = new ChatLayout();
    this.app = React.createElement(ChatLayoutComponent, { handler }, null);

    render(this.app, elementNode);

    return handler;
  }

  /**
   * Get the react app instance
   */
  getApp() {
    return this.app;
  }
}
