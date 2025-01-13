export interface ModalProps {
  onOpen: () => void;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
  confirm: () => void;
}
