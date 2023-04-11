import clsx from "clsx";
import React, { ReactElement } from "react";
import "./ItemFeature.scss";
export interface ItemFeatureProps {
  img?: string;
  title?: string;
  subTitle?: string;
  variants?:
    | "primary"
    | "danger"
    | "success"
    | "secondary"
    | "warning"
    | "purple";
  classes?: string[];
}
const ItemFeature = (props: ItemFeatureProps): ReactElement => {
  return (
    <div
      className={clsx("item-feature-container", `${props.variants}__bgColor`)}
    >
      <div className="skew-badge-container">
        <div className="skew-badge"></div>
      </div>
      <div className="wrapper-img">
        <img alt="Scaler Icon" src={props.img} />
      </div>
      <div className="item-feature-title">
        <b>{props.title}</b>
        {props.subTitle}
      </div>
    </div>
  );
};
export default ItemFeature;
