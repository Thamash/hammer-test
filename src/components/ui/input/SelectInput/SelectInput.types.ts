import { SelectOption } from '@/common/types';

export interface SelectInputProps {
  label: string;
  icon: string;
  labelColorClass: string;
  options: SelectOption[];
  onChange?: (selected: SelectOption | null) => void;
  value?: SelectOption | null;
}
