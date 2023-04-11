import React, { ReactNode } from "react";
import clsx from "clsx";
import "./AcademyButton.scss";
interface AcademyButtonProps {
  disable?: Boolean;
  classes?: string[];
  onClick?: (params: any) => void | any;
  content?: string | ReactNode;
  mode?: "outline" | "solid" | "text";
  variant?: "primary" | "secondary" | "light";
  fullWidth?: boolean;
}
const AcademyButton = (props: AcademyButtonProps) => {
  const { classes = [] } = props;
  return (
    <div
      className={clsx(
        "academy-button",
        `${props.variant}`,
        `${props.mode}`,
        `academy-button__${props.fullWidth}`,
        ...classes
      )}
    >
      {props.content}
    </div>
  );
};
export default AcademyButton;
