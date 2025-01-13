import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SelectInput } from '../input/SelectInput/SelectInput';
import { ModalProps, ModalRef } from './Modal.types';
import { projectSelectors, useProjectStore } from '@/stores/project';
import { mockSelectOptions } from '../../../../mocks/users';
import { SelectOption } from '@/common/types';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#3D334D',
    border: '1px solid #726385',
    borderRadius: '20px',
    width: '350px',
    maxHeight: '658px',
    color: 'white',
    padding: '20px',
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = React.forwardRef<ModalRef, ModalProps>((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const { onOpen, onClose, onConfirm } = props;
  const project = useProjectStore(projectSelectors.selectedProject);
  const { setSelectedProject } = useProjectStore(projectSelectors.actions);

  React.useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true);
      onOpen?.();
    },
    close: () => {
      setOpen(false);
      onClose?.();
    },
    confirm: async () => {
      await onConfirm?.();
      setOpen(false);
      setSelectedProject(null);
    },
  }));

  const handleClose = () => {
    setOpen(false);
  };

  const handleBriefingLoopMasterChange = (selected: SelectOption | null) => {
    if (project?.id) {
      setSelectedProject({
        ...project,
        briefingLoopMaster: selected,
      });
    }
  };

  const handleResearcherLoopMasterChange = (selected: SelectOption | null) => {
    if (project?.id) {
      setSelectedProject({
        ...project,
        researcherLoopMaster: selected,
      });
    }
  };

  const handleStrategyLoopMasterChange = (selected: SelectOption | null) => {
    if (project?.id) {
      setSelectedProject({
        ...project,
        strategyLoopMaster: selected,
      });
    }
  };

  const handlePresentationLoopMasterChange = (
    selected: SelectOption | null
  ) => {
    if (project?.id) {
      setSelectedProject({
        ...project,
        presentationLoopMaster: selected,
      });
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="p-5 top-2 right-2 absolute"
        >
          <CloseIcon />
        </IconButton>
        <div className="pt-29px">
          <div className="flex flex-col gap-2.5">
            <div className="w-full text-center text-xl h-10">
              {project?.name}
            </div>
            <div className="w-full text-center text-xl h-6">
              Assign the loop masters
            </div>
          </div>
        </div>
        <div className="mt-21px mb-2.5">
          <SelectInput
            icon="/icons/input/briefing.svg"
            label="Briefing loop"
            labelColorClass="bg-researcher-select-label"
            onChange={handleBriefingLoopMasterChange}
            options={mockSelectOptions}
            value={project?.briefingLoopMaster}
          />
        </div>
        <div className="mb-2.5">
          <SelectInput
            icon="/icons/input/research.svg"
            label="Researcher loop"
            labelColorClass="bg-briefing-select-label"
            onChange={handleResearcherLoopMasterChange}
            options={mockSelectOptions}
            value={project?.researcherLoopMaster}
          />
        </div>
        <div className="mb-2.5">
          <SelectInput
            icon="/icons/input/strategy.svg"
            label="Strategy loop"
            labelColorClass="bg-strategy-select-label"
            onChange={handleStrategyLoopMasterChange}
            options={mockSelectOptions}
            value={project?.strategyLoopMaster}
          />
        </div>
        <div className="mb-2.5">
          <SelectInput
            icon="/icons/input/presentation.svg"
            label="Presentation loop"
            labelColorClass="bg-presentation-select-label"
            onChange={handlePresentationLoopMasterChange}
            options={mockSelectOptions}
            value={project?.presentationLoopMaster}
          />
        </div>
        <DialogActions>
          <Button
            onClick={onConfirm}
            className="m-auto w-226px bg-purple-600 hover:bg-purple-500 text-white normal-case py-2 rounded-lg font-poppins text-sm font-normal"
            variant="contained"
            disableElevation
            sx={{
              '&.MuiButton-root': {
                backgroundColor: 'inherit',
                '&:hover': {
                  backgroundColor: 'inherit',
                },
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
});

Modal.displayName = 'Modal';
