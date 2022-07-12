import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
};

export const Primary = () => (
  <Logo
    imgUrl="/src/assets/triple2x.png"
    imgAlt="Logo"
    text="2021년 12월 기준"
  />
);
