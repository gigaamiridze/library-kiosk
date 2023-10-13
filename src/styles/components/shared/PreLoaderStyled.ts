import styled from 'styled-components';
import keyframes from '../../keyframes';

const PreLoaderStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;

  #book {
    width: 32px;
    height: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    #inner {
      width: 32px;
      height: 12px;
      position: relative;
      transform-origin: 2px 2px;
      transform: rotateZ(-90deg);
      animation: ${keyframes.book} ${({ theme }) => theme.animations.easeInfinite};

      #left,
      #right {
        width: 60px;
        height: 4px;
        position: absolute;
        top: 0;
        border-radius: 2px;
        background: ${({ theme }) => theme.colors.purple};
      }

      #left:before,
      #right:before {
        content: '';
        width: 48px;
        height: 4px;
        border-radius: 2px;
        background: inherit;
        position: absolute;
        top: -10px;
        left: 6px;
      }

      #left {
        right: 28px;
        transform-origin: 58px 2px;
        transform: rotateZ(90deg);
        animation: ${keyframes.left} ${({ theme }) => theme.animations.easeInfinite};
      }

      #right {
        left: 28px;
        transform-origin: 2px 2px;
        transform: rotateZ(-90deg);
        animation: ${keyframes.right} ${({ theme }) => theme.animations.easeInfinite};
      }

      #middle {
        width: 32px;
        height: 12px;
        border: 4px solid ${({ theme }) => theme.colors.purple};
        border-top: 0;
        border-radius: 0 0 9px 9px;
        transform: translateY(2px);
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      left: 50%;
      top: 0;

      li {
        height: 4px;
        border-radius: 2px;
        transform-origin: 100% 2px;
        width: 48px;
        right: 0;
        top: -10px;
        position: absolute;
        background: ${({ theme }) => theme.colors.purple};
        transform: rotateZ(0deg) translateX(-18px);
        animation: ${({ theme }) => theme.animations.easeInfinite};

        &:nth-child(0) {
          animation-name: ${keyframes.page0};
        }
        &:nth-child(1) {
          animation-name: ${keyframes.page1};
        }
        &:nth-child(2) {
          animation-name: ${keyframes.page2};
        }
        &:nth-child(3) {
          animation-name: ${keyframes.page3};
        }
        &:nth-child(4) {
          animation-name: ${keyframes.page4};
        }
        &:nth-child(5) {
          animation-name: ${keyframes.page5};
        }
        &:nth-child(6) {
          animation-name: ${keyframes.page6};
        }
        &:nth-child(7) {
          animation-name: ${keyframes.page7};
        }
        &:nth-child(8) {
          animation-name: ${keyframes.page8};
        }
        &:nth-child(9) {
          animation-name: ${keyframes.page9};
        }
        &:nth-child(10) {
          animation-name: ${keyframes.page10};
        }
        &:nth-child(11) {
          animation-name: ${keyframes.page11};
        }
        &:nth-child(12) {
          animation-name: ${keyframes.page12};
        }
        &:nth-child(13) {
          animation-name: ${keyframes.page13};
        }
        &:nth-child(14) {
          animation-name: ${keyframes.page14};
        }
        &:nth-child(15) {
          animation-name: ${keyframes.page15};
        }
        &:nth-child(16) {
          animation-name: ${keyframes.page16};
        }
        &:nth-child(17) {
          animation-name: ${keyframes.page17};
        }
        &:nth-child(18) {
          animation-name: ${keyframes.page18};
        }
      }
    }
  }
`;

export default PreLoaderStyled;
