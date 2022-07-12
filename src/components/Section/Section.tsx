import { SectionProps } from "../../interfaces/Section.interface";
import Badge from "../Badge/Badge";
import Logo from "../Logo/Logo";
import Metric from "../Metric/Metric";

import {
  LogoArea,
  MetricArea,
  BadgeArea,
  SectionTriple,
} from "./Section.style";

const Section = (props: SectionProps) => {
  const { logoDelay, metricDelay, badgeDelay } = props;
  return (
    <SectionTriple>
      <LogoArea delay={logoDelay || 0}>
        <Logo
          imgUrl="/src/assets/triple2x.png"
          imgAlt="Logo"
          text="2021년 12월 기준"
        />
      </LogoArea>
      <MetricArea delay={metricDelay || 100}>
        <Metric numberCounter={700} textStrong="만 명" textNormal="의 여행자" />
        <Metric
          numberCounter={100}
          textStrong="만 개"
          textNormal="의 여행 리뷰"
        />
        <Metric
          numberCounter={470}
          textStrong="만 개"
          textNormal="의 여행 일정"
        />
      </MetricArea>
      <BadgeArea delay={badgeDelay || 200}>
        <Badge
          imgUrl="/src/assets/play-store2x.png"
          texts={["2018 구글 플레이스토어", "올해의 앱 최우수상 수상"]}
        />
        <Badge
          imgUrl="/src/assets/badge-apple4x.png"
          texts={["2018 애플 앱스토어", "오늘의 여행앱 선정"]}
        />
      </BadgeArea>
    </SectionTriple>
  );
};

export default Section;
