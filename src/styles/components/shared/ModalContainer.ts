import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalContainer = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.xLarge};
  `}
  width: 50%;
  padding: 30px;
  box-shadow: 0px 10px 30px 0px rgba(168.99, 166.99, 188.99, 0.25);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export default ModalContainer;
