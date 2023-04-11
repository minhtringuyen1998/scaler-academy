import clsx from "clsx";
import React, { Children, ReactElement } from "react";
import ItemFeature from "screen/academy/presenters/components/feature-section/components/item-feature/ItemFeature";
import "./Flex.scss";
interface FlexProps {
  classes: string[];
  children: ReactElement[];
}
const Flex = (props: FlexProps): ReactElement => {
  return (
    <div className={clsx("flex-container", ...props.classes)}>
      {props.children}
    </div>
  );
};
export default Flex;
