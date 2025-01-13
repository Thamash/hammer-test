import { Project, ProjectStatus } from '@/common/types';
import { Row } from '@tanstack/react-table';

export const getRowClassName = (row: Row<Project>) => {
  return `
    ${
      row.original.status === ProjectStatus.IN_PROGRESS
        ? 'border-in-progress-project-row-border bg-in-progress-project-row border-solid even:bg-in-progress-project-row-even hover:bg-in-progress-project-row-hover'
        : ''
    }
    ${
      row.original.status === ProjectStatus.NEW
        ? 'border-new-project-row-border bg-new-project-row border-solid even:bg-new-project-row-even hover:bg-new-project-row-hover'
        : ''
    }
    ${
      row.original.status === ProjectStatus.FINISHED
        ? 'border-finished-project-row-border bg-finished-project-row border-solid even:bg-finished-project-row-even hover:bg-finished-project-row-hover'
        : ''
    }
    `;
};
