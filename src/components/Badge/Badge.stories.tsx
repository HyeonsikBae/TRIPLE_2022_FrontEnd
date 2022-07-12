import Badge from "./Badge";

export default {
  title: "Badge",
  component: Badge,
};

export const Primary = () => (
  <Badge
    imgUrl="/src/assets/play-store2x.png"
    texts={["2018 구글 플레이스토어", "올해의 앱 최우수상 수상"]}
  />
);

export const Secondary = () => (
  <Badge
    imgUrl="/src/assets/badge-apple4x.png"
    texts={["2018 애플 앱스토어", "오늘의 여행앱 선정"]}
  />
);
