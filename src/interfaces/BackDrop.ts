import { ReactNode } from 'react';

export interface IBackDropProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}
