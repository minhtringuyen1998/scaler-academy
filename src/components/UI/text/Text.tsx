import clsx from "clsx";
import React, { Children } from "react";
import { Text } from "./style";
export type ITypo = {
  children: any;
  inline?: boolean | false;
  color?: string | "black";
  size?: string | "16px";
  bold?: string | "600";
  classes?: string[];
  onclick?: () => void;
  isClick?: boolean;
};
export const Typo = (props: ITypo) => {
  const { children, classes = [], onclick = () => {} } = props;
  return (
    <Text {...props} className={clsx(...classes)} onClick={onclick}>
      {children}
    </Text>
  );
};
