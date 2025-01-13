import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectSelectors, useProjectStore } from '@/stores/project';
import { ProjectStatus } from '@/common/types';
import { statusFilterValues } from '@/common/values';
import { AllProjectsStatusFilterProps } from './AllProjectsStatusFilter.types';

export const AllProjectsStatusFilter = ({
  onSelect,
}: AllProjectsStatusFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedStatus = useProjectStore(projectSelectors.statusFilter);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element)?.closest('.status-filter')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (status: ProjectStatus, event: React.MouseEvent) => {
    event.stopPropagation();
    onSelect(status);
    setIsOpen(false);
  };

  return (
    <div className="relative right-1 top-3 -translate-y-1/2 status-filter">
      <button
        className="w-17px h-2.5 m-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/icons/filter.svg" alt="Search" width={17} height={10} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-purple-800 border border-purple-700 shadow-lg z-50">
          {statusFilterValues.map((status) => (
            <button
              key={status.value}
              onClick={(e) => handleSelect(status.value, e)}
              className={`
                w-full px-4 py-2 text-left hover:bg-purple-700 first:rounded-t-lg last:rounded-b-lg
                ${
                  selectedStatus === status.value
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300'
                }
              `}
            >
              {status.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
