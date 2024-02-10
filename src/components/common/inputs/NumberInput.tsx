import React, { ChangeEvent } from 'react';

import { Input } from '@/components/nextui';
import { trimZero, validateNumber } from '@/utils';

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  maxDecimals?: number;
  onChange: (value: string) => void;
}

const NumberInput = ({
  className,
  label,
  placeholder,
  value,
  disabled,
  maxDecimals,
  onChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = trimZero(e.target.value.trim());
    if (!validateNumber(value, maxDecimals)) return;
    onChange(value);
  };

  return (
    <Input
      className={className}
      label={label}
      type="text"
      inputMode="decimal"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    ></Input>
  );
};

export default NumberInput;
