import { IButtonWithSpinnerProps } from '../../interfaces';
import { Button, SpinnerLoader } from '../../styles';

function ButtonWithSpinner(props: IButtonWithSpinnerProps) {
  const { title, disabled, onClick } = props;

  return (
    <Button
      backgroundColor='purple'
      titleColor='white'
      hoverBgColor='white'
      hoverTitleColor='purple'
      padding={10}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {disabled && (
        <SpinnerLoader size={19} color='gainsboro' />
      )}
    </Button>
  )
}

export default ButtonWithSpinner;
