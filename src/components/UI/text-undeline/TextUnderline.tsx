import React from "react";
import { Text } from "./style";
export interface ITextUndelineProps {
  contents: string;
  color?: string;
  classes?: string[];
  fontWeight?: string;
  fontSize?: number;
  position?: string;
}
const TextUnderline = (props: ITextUndelineProps) => {
  const { contents } = props;
  return <Text {...props}>{contents}</Text>;
};
export default TextUnderline;
