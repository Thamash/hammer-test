import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AllProjectsSearchInputProps } from './AllProjectsSearchInput.types';
import { ProjectSearchHandler } from '../ProjectSearchHandler';

export const AllProjectsSearchInput = ({
  onChange,
}: AllProjectsSearchInputProps) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(searchInput);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchInput, onChange]);

  const handleSearch = (needle: string): void => {
    setSearchInput(needle);
  };
  return (
    <div className="flex justify-between items-center">
      <ProjectSearchHandler />
      <input
        type="text"
        placeholder="Search for Project"
        className="bg-transparent border placeholder:text-white/70 text-white rounded-lg px-4 py-2 pr-12 w-80"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="relative right-8 top-2 -translate-y-1/2">
        <Image
          src="/icons/input/search.svg"
          alt="Search"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
