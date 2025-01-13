import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SelectOption } from '@/common/types';
import { SelectInputProps } from './SelectInput.types';

export const SelectInput: React.FC<SelectInputProps> = ({
  onChange,
  icon,
  label,
  labelColorClass,
  options,
  value, // This can be controlled from outside
}) => {
  // Keep internal state for uncontrolled usage
  const [internalValue, setInternalValue] = useState<SelectOption | null>(
    value || null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Update internal state when external value changes
  useEffect(() => {
    setInternalValue(value || null);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.select-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (option: SelectOption) => {
    setInternalValue(option); // Update internal state
    setIsOpen(false);
    onChange?.(option); // Notify parent component
  };

  // Use value prop if provided, otherwise use internal state
  const selectedValue = value !== undefined ? value : internalValue;

  return (
    <div className="w-226px m-auto flex flex-col gap-2 relative select-container">
      <div
        className={`${labelColorClass} relative flex items-center text-white pl-10 pr-4 py-2 rounded-lg`}
      >
        <div className="absolute left-3">
          <Image src={icon} alt="select logo" width={14} height={14} />
        </div>
        <span className="font-poppins text-xxs font-normal">{label}</span>
      </div>

      <div className="relative">
        <div
          className="w-full bg-purple-800 hover:bg-purple-700 text-gray-300 pl-4 pr-10 py-2 rounded-lg cursor-pointer flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedValue && (
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={selectedValue.imagePath}
                alt={selectedValue.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <span>
            {selectedValue ? selectedValue.name : 'Choose loop master'}
          </span>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className={`w-4 h-4 text-gray-300 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {isOpen && (
          <div className="absolute w-full mt-0 bg-purple-800 rounded-lg overflow-hidden z-50">
            {options.map((option) => (
              <div
                key={option.id}
                className={`
                  px-4 py-2 cursor-pointer flex items-center gap-2
                  ${
                    option.id === selectedValue?.id
                      ? 'bg-purple-600 text-white'
                      : 'hover:bg-purple-700 text-gray-300'
                  }
                `}
                onClick={() => handleSelect(option)}
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src={option.imagePath}
                    alt={option.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
