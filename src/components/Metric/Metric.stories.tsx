import Metric from "./Metric";

export default {
  title: "Metric",
  component: Metric,
};

export const Primary = () => (
  <Metric numberCounter={700} textStrong="만 명" textNormal="의 여행자" />
);

export const Secondary = () => (
  <Metric numberCounter={100} textStrong="만 개" textNormal="의 여행 리뷰" />
);

export const Tertiary = () => (
  <Metric numberCounter={470} textStrong="만 개" textNormal="의 여행 일정" />
);
