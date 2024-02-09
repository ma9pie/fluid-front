import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  mobile?: ReactNode;
  desktop?: ReactNode;
}

const ResponsiveView = ({ className, mobile, desktop }: Props) => {
  return (
    <div className={className}>
      {/* mobile */}
      <Mobile>{mobile}</Mobile>
      {/* tablet */}
      <Desktop>{desktop}</Desktop>
    </div>
  );
};

export default React.memo(ResponsiveView);

const Mobile = styled.div`
  ${tw`sm:hidden`};
`;
const Desktop = styled.div`
  ${tw`hidden`};
  ${tw`sm:block`};
`;
