import React, { useRef, useEffect } from "react";
import "./style.scss";
import clsx from "clsx";
interface ICompanyProps {
  classes: string[];
}

const CompanyImage = (props: ICompanyProps) => {
  const { classes } = props;
  return (
    <span className={clsx("companies", "companies-icon", ...classes)}></span>
  );
};

export default CompanyImage;
