import { fadeInOut } from '../animations';
import { FlexBox } from '../styles';

fadeInOut

function Contact() {
  return (
    <FlexBox
      flexDirection='column' 
      rowGap={60}
      variants={fadeInOut}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      Contact
    </FlexBox>
  )
}

export default Contact;
