import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChatLayout } from '../core/chat-layout';

interface Props {
  handler: ChatLayout;
}

class ChatLayoutComponent extends Component<Props> {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

export default ChatLayoutComponent;
