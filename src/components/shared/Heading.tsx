import { IHeadingProps } from '../../interfaces';
import { HeadingStyled } from '../../styles';

function Heading(props: IHeadingProps) {
  return (
    <HeadingStyled 
      as={props.type}
      type={props.type}
      color={props.color}
      hoverColor={props.hoverColor}
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      letterSpacing={props.letterSpacing}
      textAlign={props.textAlign}
      textTransform={props.textTransform}
      ellipsis={props.ellipsis}
      onClick={props.onClick}
    >
      {props.title}
    </HeadingStyled>
  )
}

export default Heading;