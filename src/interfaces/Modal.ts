interface IModalProps {
  onClose: () => void;
}

export interface ILoginModalProps extends IModalProps {
  onSuccess: () => void;
}

export interface IBookIdEntryModalProps extends IModalProps {
  onConfirm: () => void;
}

export interface IConfirmationModalProps {
  type: 'borrow' | 'return';
  onConfirm: () => void;
}
