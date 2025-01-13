import React from 'react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import Image from 'next/image';
import { Project, ProjectStatus } from '@/common/types';
import Button from '@mui/material/Button';
import { DownloadIcon } from 'lucide-react';
import { Tooltip } from '@mui/material';
import { AllProjectsTableColumnsProps } from './AllProjectsTableColumns.types';

const columnHelper = createColumnHelper<Project>();

export const AllProjectsTableColumns = ({
  handleOpenModal,
}: AllProjectsTableColumnsProps): // eslint-disable-next-line @typescript-eslint/no-explicit-any
ColumnDef<Project, any>[] => [
  columnHelper.accessor('name', {
    cell: (info) => (
      <div
        className="flex items-center min-w-120px max-w-120px cursor-pointer"
        title={info.getValue()}
        onClick={() => handleOpenModal(info.row.original.id)}
      >
        <Tooltip title={info.getValue()}>
          <span className="font-medium text-white truncate">
            {info.getValue()}
          </span>
        </Tooltip>
      </div>
    ),
  }),
  columnHelper.accessor('progress', {
    cell: (info) => (
      <div className="flex min-w-50px text-center ml-2.5">
        <span className="text-gray-400 w-full">
          {info.row.original.progress}%
        </span>
      </div>
    ),
  }),
  columnHelper.accessor('id', {
    cell: (info) => (
      <span className="text-gray-400 w-150px text-xxs ml-2.5">
        {`Project ID: ${info.getValue()}`}
      </span>
    ),
  }),
  columnHelper.accessor('download', {
    cell: (info) =>
      info.row.original.download ? (
        <Button
          variant="outlined"
          endIcon={<DownloadIcon />}
          className="px-4 ml-6 w-145px py-2 border border-solid border-white rounded-lg text-white flex items-center gap-2"
          onClick={() => handleDownload(info.row.original.id)}
        >
          Download
        </Button>
      ) : (
        <div className="w-145px" />
      ),
  }),
  columnHelper.display({
    id: 'moreInfo',
    cell: (info) => (
      <div className="flex items-center gap-1">
        <Tooltip title="Click for more info">
          <>
            <span className="text-gray-400 text-xxs leading-none">
              More info
            </span>
            <div className="flex items-center w-30px h-30px rounded-full overflow-hidden bg-purple-900">
              <button
                className="w-14px h-4 m-auto"
                onClick={() => handleOpenModal(info.row.original.id)}
              >
                <Image
                  src="/icons/info.svg"
                  alt="notification icon"
                  width={14}
                  height={16}
                  className="w-14px h-4 m-auto"
                />
              </button>
            </div>
          </>
        </Tooltip>
      </div>
    ),
  }),
  columnHelper.accessor('status', {
    cell: (info) => {
      const status = info.getValue();
      const getStatusClass = (status: Project['status']): string => {
        switch (status) {
          case ProjectStatus.NEW:
            return 'bg-new-project-row-badge text-white';
          case ProjectStatus.IN_PROGRESS:
            return 'bg-in-progress-project-row-badge text-white';
          case ProjectStatus.FINISHED:
            return 'bg-finished-project-row-badge text-finished-project-row-badge-text';
          default:
            return 'bg-gray-500 text-white';
        }
      };

      return (
        <div className=" flex items-center w-100px text-right">
          <span
            className={`flex items-center mt-1 px-3 h-25px py-1  rounded-lg ${getStatusClass(
              status
            )} text-sm`}
          >
            {status}
          </span>
        </div>
      );
    },
  }),

  columnHelper.display({
    id: 'open',
    cell: (info) => (
      <button
        className="text-gray-400 mt-3 hover:text-white"
        onClick={() => handleMoreInfo(info.row.original.id)}
      >
        <Image
          src="/icons/left-accordion-arrow.svg"
          alt="Search"
          width={10}
          height={5}
          style={{
            width: '15px',
            height: '10px',
          }}
        />
      </button>
    ),
  }),
];

const handleDownload = (projectId: string): void => {
  console.log(`Downloading project: ${projectId}`);
};

const handleMoreInfo = (projectId: string): void => {
  console.log(`Showing more info for project: ${projectId}`);
};
