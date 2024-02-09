import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

type Position = 'start' | 'end' | 'center' | 'between';

interface Props {
  className?: string;
  flex?: number;
  col?: boolean;
  wrap?: boolean;
  gap?: number;
  justify?: Position;
  items?: Position;
  children?: ReactNode;
  onClick?: () => void;
}

const Flex = ({
  className,
  flex,
  col,
  wrap,
  gap,
  justify,
  items,
  children,
  onClick = () => {},
}: Props) => {
  return (
    <Wrapper
      className={className}
      style={{
        flex: flex,
        gap: gap,
      }}
      col={col}
      wrap={wrap}
      justify={justify}
      items={items}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

export default Flex;

const Wrapper = styled.div<Props>`
  ${tw`flex`};
  ${(props) => props.col && tw`flex-col`};
  ${(props) => props.wrap && tw`flex-wrap`};
  ${(props) => {
    switch (props.justify) {
      case 'start':
        return tw`justify-start`;
      case 'end':
        return tw`justify-end`;
      case 'center':
        return tw`justify-center`;
      case 'between':
        return tw`justify-between`;
    }
  }};
  ${(props) => {
    switch (props.items) {
      case 'start':
        return tw`items-start`;
      case 'end':
        return tw`items-end`;
      case 'center':
        return tw`items-center`;
    }
  }};
`;
