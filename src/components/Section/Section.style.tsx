import styled from "styled-components";

import { DelayProps } from "../../interfaces/Section.interface";
import { fadeInAnimation } from "../../animations/fadeIn";

export const SectionReponsive = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1040px;
  margin: auto;
`;

export const SectionRight = styled.div`
  position: absolute;
`;

export const LogoArea = styled.div<DelayProps>`
  position: relative;
  top: 150px;
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
`;

export const MetricArea = styled.div<DelayProps>`
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
  margin-left: 623px;
  padding-top: 150px;
`;

export const BadgeArea = styled.div<DelayProps>`
  display: flex;
  animation: ${fadeInAnimation} 700ms ease-in-out;
  animation-delay: ${(prop) => prop.delay}ms;
  margin: 50px 0px 140px 623px;
`;
