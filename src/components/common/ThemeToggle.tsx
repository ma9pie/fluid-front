import { useTheme } from 'next-themes';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import tw, { styled } from 'twin.macro';

import Toggle from '@/components/common/Toggle';
import { Theme } from '@/types';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const isSelected = useMemo(() => theme === Theme.Dark, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      document.documentElement.setAttribute('data-theme', Theme.Dark);
      localStorage.setItem('theme', Theme.Dark);
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
      document.documentElement.setAttribute('data-theme', Theme.Light);
      localStorage.setItem('theme', Theme.Light);
    }
  };

  if (!mounted) return <BlankBox></BlankBox>;
  return (
    <Toggle
      className="m-0"
      size="lg"
      color="default"
      isSelected={isSelected}
      icon={isSelected ? <FiMoon></FiMoon> : <FiSun></FiSun>}
      onChange={handleChange}
    ></Toggle>
  );
};

export default ThemeToggle;

const BlankBox = styled.div`
  ${tw`w-16`};
`;
