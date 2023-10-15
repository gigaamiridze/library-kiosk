import styled, { css } from 'styled-components';

const BookCardContainer = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    border: 2px solid ${isSelected ? theme.colors.purple : theme.colors.gainsboro};
    border-radius: ${theme.borderRadius.large};
    transition: ${theme.animations.easeInOut};
  `}
  width: 23%;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
  }

  img {
    ${({ theme }) => css`
      border-top-left-radius: ${theme.borderRadius.large};
      border-top-right-radius: ${theme.borderRadius.large};
    `}
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  #info {
    padding: 15px;
  }
`;

export default BookCardContainer;
