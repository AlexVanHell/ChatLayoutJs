import React, { Fragment, useContext, useState } from 'react';
import { ChatLayoutGroupInterface } from '../../../types/layout/chat-layout-group.interface';
import { LayoutHandlerContext } from '../../context/layout-handler.context';
import LeftHead from '../../themes/HOCs/LeftHead/LeftHead';
import { Searchbar } from '../../themes/HOCs/Searchbar/Searchbar';
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

  const handleSearchInputValueChange = (value: string) => {
    console.log(value);
  };

  return (
    <Fragment>
      <Head>
        <LeftHead />
      </Head>
      <Searchbar onInputValueChange={handleSearchInputValueChange} />
      <Groups groups={groups} />
      <Foot>
        <Conversations items={state.items} />
      </Foot>
    </Fragment>
  );
};

LeftContent.propTypes = {};

export default LeftContent;
