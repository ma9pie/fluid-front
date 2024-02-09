import React from 'react';
import tw, { styled } from 'twin.macro';

import useTailwindColor from '@/hooks/useTailwindColor';

interface Props {
  [key: string]: any;
  className?: string;

  size?: number;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;

  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;

  black?: boolean;
  white?: boolean;

  flex?: number;
  inline?: boolean;
  nowrap?: boolean;
  underline?: boolean;
  breakAll?: boolean;
  pointer?: boolean;
  hidden?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  children?: string;
}

const Text = ({
  className,

  size,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,

  medium,
  semibold,
  bold,

  black,
  white,

  flex,
  inline,
  nowrap,
  underline,
  breakAll,
  pointer,
  hidden,

  left,
  right,
  center,

  children,
  ...props
}: Props) => {
  const color = useTailwindColor(props);

  return (
    <P
      className={className}
      size={size}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      medium={medium}
      semibold={semibold}
      bold={bold}
      black={black}
      white={white}
      inline={inline}
      nowrap={nowrap}
      underline={underline}
      breakAll={breakAll}
      pointer={pointer}
      hidden={hidden}
      left={left}
      right={right}
      center={center}
      style={{ color: color }}
    >
      {children}
    </P>
  );
};

export default Text;

const P = styled.p<Props>`
  font-size: ${(props) => `${props.size}px`};
  ${(props) => props.xs && tw`text-xs`};
  ${(props) => props.sm && tw`text-sm`};
  ${(props) => props.md && tw`text-base`};
  ${(props) => props.lg && tw`text-lg`};
  ${(props) => props.xl && tw`text-xl`};
  ${(props) => props.xxl && tw`text-2xl`};

  ${(props) => props.medium && tw`font-medium`};
  ${(props) => props.semibold && tw`font-semibold`};
  ${(props) => props.bold && tw`font-bold`};

  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.inline && tw`inline`};
  ${(props) => props.nowrap && tw`whitespace-nowrap`};
  ${(props) => props.underline && tw`underline`};
  ${(props) => props.breakAll && tw`break-all`};
  ${(props) => props.pointer && tw`cursor-pointer`};
  ${(props) => props.hidden && tw`hidden`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
