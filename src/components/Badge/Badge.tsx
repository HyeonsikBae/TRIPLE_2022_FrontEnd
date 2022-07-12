import { BadgeProps } from "../../interfaces/Badge.interface";

import { BadgeBox, BadgeText } from "./Badge.style";

const Badge = (props: BadgeProps) => {
  const { imgUrl, texts } = props;

  const renderTexts = () => {
    return texts.map((text, i) => {
      return (
        <p style={{ margin: 0, whiteSpace: "nowrap" }} key={i}>
          {text}
        </p>
      );
    });
  };

  return (
    <BadgeBox imgUrl={imgUrl || "/src/assets/default.png"}>
      <BadgeText>{renderTexts()}</BadgeText>
    </BadgeBox>
  );
};

export default Badge;
