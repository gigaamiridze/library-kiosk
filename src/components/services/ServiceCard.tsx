import { ServiceCardContainer, Button } from '../../styles';
import { IServiceCardProps } from '../../interfaces';
import { Heading } from '../../components';

function ServiceCard(props: IServiceCardProps) {
  const { image, headingTitle, buttonTitle, onClick } = props;

  return (
    <ServiceCardContainer 
      flexDirection='column' 
      alignItems='flex-start' 
      rowGap={20}
    >
      <img src={image} alt={buttonTitle} />
      <Heading 
        title={headingTitle}
        type='h6'
        fontWeight='500'
      />
      <Button
        type='button' 
        backgroundColor='purple'
        titleColor='white'
        hoverBgColor='white'
        hoverTitleColor='purple'
        onClick={onClick}
      >
        {buttonTitle}
      </Button>
    </ServiceCardContainer>
  )
}

export default ServiceCard;
