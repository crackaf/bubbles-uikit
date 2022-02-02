export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;

  // Adding new Gradients here from figma @Arbab
  gradient1: string;
  gradient2: string;
  gradient3: string;
  gradient4: string;
  gradient5: string;
  gradient6: string;
  gradient7: string;
  gradient8: string;
};

export type Neutral = {
  gray12: string;
  gray13: string;
  gray14: string;
  gray15: string;
  gray16: string;
  gray17: string;
  gray18: string;
  gray19: string;
  gray20: string;
  gray21: string;
  gray22: string;
  gray23: string;
  gray24: string;
};

export type Blue = {
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
};

export type Red = {
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
};

export type Green = {
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
};

export type Yellow = {
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
};

export type BasicColors = {
  red: Red;
  blue: Blue;
  green: Green;
  yellow: Yellow;
};

export type TransparentColors = {
  transRed: string;
  transBlue: string;
  transGreen: string;
  transYellow: string;
  transTurquoise: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  cardShadow: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  text: string;
  textHeading: string;
  textSecondary: string;
  textDisabled: string;
  textInfo: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;

  // Transparent Colors
  transparentColors: TransparentColors;

  // Basic Colors
  basicColors: BasicColors;

  // Neutral Colors
  neutralColors: Neutral;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
