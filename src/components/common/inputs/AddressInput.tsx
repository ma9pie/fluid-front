import React, { ChangeEvent } from 'react';

import { Input } from '@/components/nextui';

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const AddressInput = ({
  className,
  label,
  placeholder = '0x0000000000000000000000000000000000000000',
  value,
  disabled,
  onChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    onChange(value);
  };

  return (
    <Input
      className={className}
      type="text"
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    ></Input>
  );
};

export default AddressInput;
