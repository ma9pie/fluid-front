import { useTheme } from 'next-themes';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import Toggle from '@/components/common/Toggle';
import { Theme } from '@/types';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const isSelected = theme === Theme.Dark;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setTheme(checked ? Theme.Dark : Theme.Light);
  };

  if (!mounted) return null;

  return (
    <Toggle
      size="lg"
      isSelected={isSelected}
      icon={isSelected ? <FiMoon></FiMoon> : <FiSun></FiSun>}
      onChange={handleChange}
    ></Toggle>
  );
};

export default ThemeToggle;
