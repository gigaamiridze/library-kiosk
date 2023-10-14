import styled from 'styled-components';
import FlexBox from './FlexBox';

const GrayBlock = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.flashWhite};
  padding: 80px 0;
`;

export default GrayBlock;
