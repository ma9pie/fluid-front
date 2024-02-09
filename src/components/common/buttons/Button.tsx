import { Button } from '@nextui-org/react';
import React, { ReactNode } from 'react';

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
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  full?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Component = ({
  className,
  size,
  color,
  radius,
  full,
  disabled,
  children,
  onClick,
}: Props) => {
  return (
    <span className={className}>
      <Button
        color={color}
        size={size}
        radius={radius}
        fullWidth={full}
        isDisabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </span>
  );
};

export default Component;
