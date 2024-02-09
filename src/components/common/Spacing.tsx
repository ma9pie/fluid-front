import React from 'react';

interface Props {
  height: number;
}

const Spacing = ({ height }: Props) => {
  return <span className="block" style={{ height: height }}></span>;
};

export default Spacing;
