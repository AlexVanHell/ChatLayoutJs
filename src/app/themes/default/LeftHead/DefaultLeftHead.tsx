import React from 'react';
import LeftHead, { LeftHeadProps } from '../../HOCs/LeftHead/LeftHead';

const DefaultLeftHead = (props: LeftHeadProps) => {
  return <div>Hello from default</div>;
};

DefaultLeftHead.propTypes = { ...LeftHead.propTypes };

export default DefaultLeftHead;
