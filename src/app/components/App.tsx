import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChatLayout } from '../../core/chat-layout';
import { LayoutHandlerContext } from '../context/layout-handler.context';
import MainContainer from './MainContainer/MainContainer';

interface Props {
  layoutHandler: ChatLayout;
}

class App extends Component<Props> {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <LayoutHandlerContext.Provider value={this.props.layoutHandler}>
        <MainContainer />
      </LayoutHandlerContext.Provider>
    );
  }
}

export default App;
