import React, { ComponentType, UIEvent, useState } from 'react';

const ScrollListener = <P extends object>(Component: ComponentType<P>) => (
  props: P,
) => {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    console.log(event);
    console.log(event.currentTarget.scrollTop);
    console.log(event.currentTarget.scrollHeight);
  };
  let divRef: HTMLDivElement = null;

  return (
    <div onScroll={(e) => handleScroll(e)} ref={(ref) => (divRef = ref)}>
      <Component {...props} />
    </div>
  );
};

export default ScrollListener;
