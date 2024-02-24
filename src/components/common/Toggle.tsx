import React, { ChangeEvent, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { Switch } from '@/components/nextui';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  isSelected?: boolean;
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({
  className,
  size,
  color,
  isSelected,
  icon,
  onChange,
}: Props) => {
  return (
    <Wrapper
      className={className}
      isSelected={isSelected}
      size={size}
      color={color}
      thumbIcon={icon}
      onChange={onChange}
    ></Wrapper>
  );
};

export default Toggle;

const Wrapper = styled(Switch)`
  span {
    margin: 0px;
  }
  & > span {
    ${tw`!bg-brandColor`};
    ${tw`dark:!bg-neutral-700`};
  }
`;
