import React, { Fragment, useContext, useState } from 'react';
import { ChatLayoutGroupInterface } from '../../../types/layout/chat-layout-group.interface';
import { LayoutHandlerContext } from '../../context/layout-handler.context';
import Foot from '../Foot/Foot';
import Head from '../Head/Head';
import Conversations from './Conversations/Conversations';
import Groups from './Groups/Groups';

const LeftContent = () => {
  const layoutHandler = useContext(LayoutHandlerContext);
  const groups = layoutHandler.groups;
  const [state, setstate] = useState<ChatLayoutGroupInterface>(
    groups[0] || ({ items: [] } as ChatLayoutGroupInterface),
  );

  return (
    <Fragment>
      <Head>
        <h1 style={{ margin: 0, padding: '4px' }}>Chat</h1>
      </Head>
      <Foot>
        <Groups groups={groups} />
        <Conversations items={state.items} />
      </Foot>
    </Fragment>
  );
};

LeftContent.propTypes = {};

export default LeftContent;
