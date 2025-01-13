import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { AllProjectsTableColumns } from '../AllProjectsTableColumns/AllProjectsTableColumns';
import { AllProjectsTableContentProps } from './AllProjectsTableContent.types';
import { getRowClassName } from '../../AllProjectsTable.helpers';
import { Modal } from '@/components/ui/Modal/Modal';
import { ModalRef } from '@/components/ui/Modal/Modal.types';
import { useRef } from 'react';
import { projectSelectors, useProjectStore } from '@/stores/project';

export const AllProjectsTableContent: React.FC<
  AllProjectsTableContentProps
> = ({ data }) => {
  const modalRef = useRef<ModalRef>(null);
  const { fetchProject, updateProject } = useProjectStore(
    projectSelectors.actions
  );
  const selectedProject = useProjectStore(projectSelectors.selectedProject);
  const handleTableRowClick = (projectId: string) => {
    fetchProject(projectId);
    modalRef.current?.open();
    console.log('Modal is open for project:', projectId);
  };
  const handleOpenModal = () => {
    console.log('Modal is open');
  };
  const handleCloseModal = () => {
    console.log('Modal is closed');
  };
  const handleConfirm = async () => {
    console.log('Modal is confirmed');
    if (!selectedProject) {
      return;
    }
    await updateProject(selectedProject);
    modalRef.current?.close();
  };

  const table = useReactTable({
    data,
    columns: AllProjectsTableColumns({ handleOpenModal: handleTableRowClick }),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-purple-950 max-h-589px overflow-auto rounded-2.5xl p-6">
      <div className="space-y-2">
        {table.getRowModel().rows.length > 0 &&
          table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className={` ${getRowClassName(
                row
              )} border h-63px rounded-lg p-4 flex
             items-center`}
            >
              {/* Left side columns (first 4) */}
              <div className="flex items-center gap-2.5 w-1/2">
                {row
                  .getVisibleCells()
                  .slice(0, 4)
                  .map((cell) => (
                    <div key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
              </div>

              {/* Right side columns (rest) */}
              <div className="flex gap-2.5 w-1/2 justify-end">
                {row
                  .getVisibleCells()
                  .slice(4)
                  .map((cell) => (
                    <div key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        {table.getRowModel().rows.length === 0 && (
          <div className="text-center">No projects found</div>
        )}
      </div>
      <Modal
        ref={modalRef}
        onOpen={handleOpenModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
