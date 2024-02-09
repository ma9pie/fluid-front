import { Switch } from '@nextui-org/react';
import React, { ChangeEvent, ReactNode } from 'react';

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
    <Switch
      className={className}
      isSelected={isSelected}
      size={size}
      color={color}
      thumbIcon={icon}
      onChange={onChange}
    ></Switch>
  );
};

export default Toggle;
