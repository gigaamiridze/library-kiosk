export interface IModalProps {
  onClose: () => void;
}

export interface ILoginModalProps extends IModalProps {
  onSuccess: () => void;
}
