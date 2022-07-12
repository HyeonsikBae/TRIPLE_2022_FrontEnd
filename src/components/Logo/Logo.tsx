import { LogoProps } from "../../interfaces/Logo.interface";

import { LogoContent, LogoImg, LogoText } from "./Logo.style";

const Logo = (props: LogoProps) => {
  const { imgUrl, imgAlt, text } = props;
  return (
    <LogoContent>
      <LogoImg
        alt={imgAlt || "Logo"}
        src={imgUrl || "/src/assets/default.png"}
      />
      <LogoText>{text}</LogoText>
    </LogoContent>
  );
};

export default Logo;
