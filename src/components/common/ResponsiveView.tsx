import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  mobile?: ReactNode;
  desktop?: ReactNode;
}

const ResponsiveView = ({ className, mobile, desktop }: Props) => {
  return (
    <>
      {/* mobile */}
      <Mobile className={className}>{mobile}</Mobile>
      {/* tablet */}
      <Desktop className={className}>{desktop}</Desktop>
    </>
  );
};

export default React.memo(ResponsiveView);

const Mobile = styled.div`
  ${tw`md:hidden`};
`;
const Desktop = styled.div`
  ${tw`hidden`};
  ${tw`md:block`};
`;
