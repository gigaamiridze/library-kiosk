import { IWelcomeSectionProps } from '../../interfaces';
import { Heading } from '../../components';
import { GrayBlock } from '../../styles';

function WelcomeSection(props: IWelcomeSectionProps) {
  const { smallTitle, bigTitle, backTitle, onBack } = props;

  return (
    <GrayBlock flexDirection='column' alignItems='center' rowGap={20}>
      <Heading
        title={`${smallTitle} 📚`}
        type='h4'
        fontWeight='600'
        textAlign='center'
        lineHeight={24}
      />
      <Heading
        title={bigTitle}
        type='h1'
        fontFamily='secondary'
        fontWeight='500'
        textAlign='center'
        lineHeight={86}
      />
      {backTitle && (
        <span onClick={onBack} style={{ marginTop: 15, cursor: 'pointer' }}>
          <Heading
            title={backTitle}
            type='h5'
            color='purple'
            fontWeight='500'
            textAlign='center'
            lineHeight={24}
          />
        </span>
      )}
    </GrayBlock>
  )
}

export default WelcomeSection;
