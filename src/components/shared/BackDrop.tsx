import { useEffect } from 'react';
import { BackDropStyled } from '../../styles';
import { IBackDropProps } from '../../interfaces';

function BackDrop({ isOpen, children }: IBackDropProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <BackDropStyled 
      isOpen={isOpen}
    >
      {children}
    </BackDropStyled>
  )
}

export default BackDrop;
