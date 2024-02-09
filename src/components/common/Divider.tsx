import React, { useEffect, useMemo, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

import useTailwindColor from '@/hooks/useTailwindColor';

interface Props {
  [key: string]: any;
  className?: string;
  dotted?: boolean;
  my?: number;
}

const Divider = ({ className, dotted, my = 0, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const color = useTailwindColor({
    ...props,
    defaultColor: 'black',
  });
  const [width, setWidth] = useState(0);
  const margin = useMemo(() => `${my}px 0px`, [my]);

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.clientWidth);
  }, []);

  if (dotted) {
    return (
      <div ref={ref} className={className} style={{ margin: margin }}>
        <svg width={width} height="2" viewBox={`0 0 ${width} 2`} fill="none">
          <path d={`M0 1H${width}`} stroke={color} strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }
  return (
    <Wrapper
      className={className}
      style={{ backgroundColor: color, margin: margin }}
    ></Wrapper>
  );
};

export default React.memo(Divider);

const Wrapper = styled.div`
  ${tw`w-full h-px`};
`;
