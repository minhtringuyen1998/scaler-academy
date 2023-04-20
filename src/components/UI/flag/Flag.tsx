import React from "react";
import "./flag.scss";
import clsx from "clsx";
export const Flag = (props: { flag: string }) => {
  return (
    <span
      className={clsx("iti__flag", props.flag && `iti__${props.flag}`)}
    ></span>
  );
};
