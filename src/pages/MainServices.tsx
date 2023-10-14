import { Heading } from '../components';
import { FlexBox } from '../styles';

function MainServices() {
  return (
    <FlexBox as='section' flexDirection='column' rowGap={80}>
      <FlexBox flexDirection='column' rowGap={20}>
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
      <FlexBox flexDirection='column' rowGap={40}>
        <Heading 
          title='Main Services'
          type='h2'
          fontFamily='secondary'
          fontWeight='500'
          lineHeight={65}
        />
      </FlexBox>
    </FlexBox>
  )
}

export default MainServices;
