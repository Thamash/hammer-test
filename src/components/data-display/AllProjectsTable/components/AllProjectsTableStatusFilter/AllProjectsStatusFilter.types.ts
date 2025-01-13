import { ProjectStatus } from '@/common/types';

export interface AllProjectsStatusFilterProps {
  onSelect: (status: ProjectStatus) => void;
}
