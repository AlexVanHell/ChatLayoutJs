import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme.context';

export interface LeftHeadProps {}

const LeftHead = (props: LeftHeadProps) => {
  const themeContext = useContext(ThemeContext);
  const Component = themeContext.createLeftHead();

  return <Component {...props} />;
};

LeftHead.propTypes = {};

export default LeftHead;
