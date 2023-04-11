import clsx from "clsx";
import React from "react";
import { IFlexibilityProps } from "../../FlexibilitySection";
import "./FlexibilityItem.scss";

const FlexibilityItem = (props: IFlexibilityProps) => {
  const { title, subTitle, img, classes = [] } = props;
  return (
    <div className={clsx("flexibility-card-container", ...classes)}>
      <div className="flexibility-img-container">
        <img alt="Scaler Flexibility" src={img} />
      </div>
      <div className="flexibility-content-container">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subTitle}</p>
      </div>
    </div>
  );
};
export default FlexibilityItem;
