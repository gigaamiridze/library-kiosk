import { useEffect, useRef, MouseEventHandler } from 'react';
import { IBackDropProps } from '../../interfaces';
import { BackDropStyled } from '../../styles';

function BackDrop(props: IBackDropProps) {
  const { isOpen, children, onClose } = props;
  const backDropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleBackDrop: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backDropRef.current) {
      onClose();
    }
  }

  return (
    <BackDropStyled 
      ref={backDropRef}
      isOpen={isOpen}
      onClick={handleBackDrop}
    >
      {children}
    </BackDropStyled>
  )
}

export default BackDrop;
