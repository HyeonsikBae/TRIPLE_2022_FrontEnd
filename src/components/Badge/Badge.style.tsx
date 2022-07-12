import styled from "styled-components";

import { BadgeBoxProps } from "../../interfaces/Badge.interface";

export const BadgeBox = styled.div<BadgeBoxProps>`
  display: flex;
  align-items: center;
  height: auto;
  width: auto;
  background-image: url(${(prop) => prop.imgUrl});
  background-repeat: no-repeat;
  background-size: 54px;
`;
export const BadgeText = styled.div`
  font-size: 14px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  padding: 5px 0 5px 62px;
  line-height: 22px;
  margin-right: 39px;
`;
