import { Heading } from '../components';
import { FlexBox } from '../styles';

function MainServices() {
  return (
    <>
      <FlexBox as='section' flexDirection='column' rowGap={20}>
        <Heading 
          title='All Your Favorite Books In One Place 📚'
          type='h4'
          fontWeight='600'
          textAlign='center'
          lineHeight={24}
        />
        <Heading 
          title='Largest Digital Library Of Bestselling eBooks'
          type='h1'
          fontFamily='secondary'
          fontWeight='500'
          textAlign='center'
          lineHeight={86}
        />
      </FlexBox>
    </>
  )
}

export default MainServices;
