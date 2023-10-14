import { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
`;

const page0 = keyframes`
  4% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  13%, 54% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  63% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page1 = keyframes`
  5.86% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  14.74%, 55.86% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  64.74% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page2 = keyframes`
  7.72% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  16.48%, 57.72% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  66.48% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page3 = keyframes`
  9.58% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  18.22%, 59.58% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  68.22% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page4 = keyframes`
  11.44% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  19.96%, 61.44% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  69.96% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page5 = keyframes`
  13.3% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  21.7%, 63.3% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  71.7% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page6 = keyframes`
  15.16% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  23.44%, 65.16% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  73.44% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page7 = keyframes`
  17.02% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  25.18%, 67.02% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  75.18% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page8 = keyframes`
  18.88% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  26.92%, 68.88% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  76.92% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page9 = keyframes`
  20.74% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  28.66%, 70.74% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  78.66% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`

const page10 = keyframes`
  22.6% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  30.4%, 72.6% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  80.4% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page11 = keyframes`
  24.46% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  32.14%, 74.46% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  82.14% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page12 = keyframes`
  26.32% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  33.88%, 76.32% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  83.88% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page13 = keyframes`
  28.18% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  35.62%, 78.18% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  85.62% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page14 = keyframes`
  30.04% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  37.36%, 80.04% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  87.36% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page15 = keyframes`
  31.9% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  39.1%, 81.9% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  89.1% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page16 = keyframes`
  33.76% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  40.84%, 83.76% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  90.84% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page17 = keyframes`
  35.62% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  42.58%, 85.62% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  92.58% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const page18 = keyframes`
  37.48% {
    transform: rotateZ(0deg) translateX(-18px);
  }
  44.32%, 87.48% {
    transform: rotateZ(180deg) translateX(-18px);
  }
  94.32% {
    transform: rotateZ(0deg) translateX(-18px);
  }
`;

const left = keyframes`
  4% {
    transform: rotateZ(90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
  }
  46%, 54% {
    transform: rotateZ(90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
  }
  96% {
    transform: rotateZ(90deg);
  }
`;

const right = keyframes`
  4% {
    transform: rotateZ(-90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
  }
  46%, 54% {
    transform: rotateZ(-90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
  }
  96% {
    transform: rotateZ(-90deg);
  }
`;

const book = keyframes`
  4% {
    transform: rotateZ(-90deg);
  }
  10%, 40% {
    transform: rotateZ(0deg);
    transform-origin: 2px 2px;
  }
  40.01%, 59.99% {
    transform-origin: 30px 2px;
  }
  46%, 54% {
    transform: rotateZ(90deg);
  }
  60%, 90% {
    transform: rotateZ(0deg);
    transform-origin: 2px 2px;
  }
  96% {
    transform: rotateZ(-90deg);
  }
`;

export default { 
  rotation,
  page0,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  left,
  right,
  book 
};
