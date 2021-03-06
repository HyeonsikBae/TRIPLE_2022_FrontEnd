import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "none",
  },
});
