import { ProjectStatus } from './types';

export const statusFilterValues = [
  { value: ProjectStatus.ALL, label: 'All' },
  { value: ProjectStatus.NEW, label: 'New' },
  { value: ProjectStatus.IN_PROGRESS, label: 'In progress' },
  { value: ProjectStatus.FINISHED, label: 'Finished' },
];
