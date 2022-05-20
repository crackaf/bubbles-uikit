import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  background?: string;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
