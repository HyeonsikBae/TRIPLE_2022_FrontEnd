import styled from "styled-components";

import { DelayProps } from "../../interfaces/Section.interface";
import { fadeInAnimation } from "../../animations/fadeIn";

export const SectionTriple = styled.div`
  height: auto;
  width: auto;
`;

export const LogoArea = styled.div<DelayProps>`
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
`;
export const MetricArea = styled.div<DelayProps>`
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
`;
export const BadgeArea = styled.div<DelayProps>`
  display: flex;
  margin-top: 50px;
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
`;
