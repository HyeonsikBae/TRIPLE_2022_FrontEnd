import { useEffect, useState } from "react";
import styled from "styled-components";

import { MetricProps } from "../../interfaces/Metric.interface";

const MetricContent = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  line-height: 36px;
`;

const Bold = styled.strong`
  font-weight: bold;
`;

const Normal = styled.span``;

const Metric = (props: MetricProps) => {
  const { numberCounter, textStrong, textNormal } = props;
  const [printNumber, setPrintNumber] = useState(0);
  const limitTime = Number(new Date());
  const counter = (end: number, endTime: number) => {
    let now = end;

    const handle = setInterval(() => {
      const time = Number(new Date());
      if (now < 0) {
        setPrintNumber(end);
        clearInterval(handle);
      }
      setPrintNumber(Math.ceil(end - now));
      const step = now / 10;
      now -= step;
    }, 50);
  };

  useEffect(() => {
    console.log(new Date().getDate);
    setTimeout(() => counter(numberCounter, limitTime), 100);
  }, []);
  return (
    <MetricContent>
      <Bold>
        {printNumber}
        {textStrong}
      </Bold>
      <Normal>{textNormal}</Normal>
    </MetricContent>
  );
};

export default Metric;
