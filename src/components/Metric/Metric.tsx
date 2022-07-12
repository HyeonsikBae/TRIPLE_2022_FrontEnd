import { useEffect, useState } from "react";

import { MetricProps } from "../../interfaces/Metric.interface";
import counter from "../../animations/countUp";

import { MetricContent, Bold, Normal } from "./Metric.style";

const Metric = (props: MetricProps) => {
  const { numberCounter, textStrong, textNormal } = props;
  const [printNumber, setPrintNumber] = useState(0);
  const limitTime = Number(new Date());

  useEffect(() => {
    console.log(new Date().getDate);
    setTimeout(() => counter(numberCounter, limitTime, setPrintNumber), 100);
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
