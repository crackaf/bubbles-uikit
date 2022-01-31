import { Colors } from "./types";

// Updated Colors here @Arbab
export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FEBF32",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#5F97FF",
  success: "#76E268",
  warning: "#FEBF32",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  cardShadow: "rgb(136 141 170 / 30%)",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textSecondary: "#280D5F",
  textHeading: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  textInfo: "#5F97FF",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",

    // Adding new Gradients here from figma @Arbab
    gradient1: "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
    gradient2: "linear-gradient(91.26deg, #45F0D1 0%, #76E268 100%)",
    gradient3: "linear-gradient(91.26deg, #76E268 0%, #FFD505 100%)",
    gradient4: "linear-gradient(91.26deg, #FFD505 0%, #F44336 100%)",
    gradient5: "linear-gradient(91.26deg, #70A2FF 0%, #72E5DA 28.65%, #72F6D1 50.52%, #76E268 100%)",
    gradient6: "linear-gradient(91.26deg, #70A2FF 0%, #F76E64 100%)",
    gradient7: "linear-gradient(91.26deg, #70A2FF 0%, #72F6D1 21.87%, #76E268 47.92%, #FFD505 72.4%, #F76E64 100%)",
    gradient8: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  },
};

// Adding Color Changes in darkColors only @Arbab
export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  background: "#17171A",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  // Updated @Arbab
  cardBorder: "#888daa", // Updated @Arbab
  cardShadow: "rgb(136 141 170 / 30%)",
  //
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",

  // Added new text colors @Arbab
  text: "#FFFFFF",
  textHeading: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  textSecondary: "#000000",
  textDisabled: "#222531",
  textInfo: "#5F97FF",
  textSubtle: "#ABAFC4",
  //
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",

    // Adding new Gradients here from figma @Arbab
    gradient1: "linear-gradient(91.26deg, #70A2FF 0%, #54F0D1 100%)",
    gradient2: "linear-gradient(91.26deg, #45F0D1 0%, #76E268 100%)",
    gradient3: "linear-gradient(91.26deg, #76E268 0%, #FFD505 100%)",
    gradient4: "linear-gradient(91.26deg, #FFD505 0%, #F44336 100%)",
    gradient5: "linear-gradient(91.26deg, #70A2FF 0%, #72E5DA 28.65%, #72F6D1 50.52%, #76E268 100%)",
    gradient6: "linear-gradient(91.26deg, #70A2FF 0%, #F76E64 100%)",
    gradient7: "linear-gradient(91.26deg, #70A2FF 0%, #72F6D1 21.87%, #76E268 47.92%, #FFD505 72.4%, #F76E64 100%)",
    gradient8: "linear-gradient(91.26deg, #A9CDFF 0%, #72F6D1 21.87%, #A0ED8D 55.73%, #FED365 81.77%, #FAA49E 100%)",
  },
};
