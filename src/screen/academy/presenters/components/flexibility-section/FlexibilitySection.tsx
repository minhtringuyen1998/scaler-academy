import Flex from "components/UI/flex/Flex";
import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React from "react";
import { ItemFeatureProps } from "../feature-section/components/item-feature/ItemFeature";
import FlexibilityItem from "./components/flexibility-item/FlexibilityItem";
import "./FlexibilitySection.scss";
export interface IFlexibilityProps extends ItemFeatureProps {}

const dataListFlexibility: IFlexibilityProps[] = [
  {
    img: "https://assets.scaler.com/assets/academy/svg/missed-class-logo-60d09407cfb901d01f9acbf3ce40460ea42c291dc97dd6a8d9fe624594977239.svg.gz",
    title: "Missed a class?",
    subTitle:
      "Watch the recording later, with teaching assistants available to solve your doubts",
  },
  {
    img: "https://assets.scaler.com/assets/academy/svg/family-logo-48c3a44b9f17f1e1a6ebcfa8e9ec7fa2370c27094caf996810c02754e307b3d1.svg.gz",
    title: "Work / family needs time?",
    subTitle:
      "Pause your course and restart a month later with the next batch!",
  },
  {
    img: "https://assets.scaler.com/assets/academy/svg/office-d6141a2e19c03a99003316e141cdb625675a0498ba05e2df5d4ebb128bc21418.svg.gz",
    title: "Jobs & class timings clash?",
    subTitle: "Decide your ideal class timing together with your classmates",
  },
  {
    img: "https://assets.scaler.com/assets/academy/svg/revise-8aceca46e65750c791c12d778669bf01650ef9e02c2d211ba30c6831c34946ab.svg.gz",
    title: "Want to revise?",
    subTitle:
      "Access assignments/notes lifelong and recordings upto 6 months post course completion",
  },
  {
    img: "https://assets.scaler.com/assets/academy/svg/doubts-44d18551b6589cdeff9e88978faac43d7bb0787cdc74e508832d7692b4d4158b.svg.gz",
    title: "Have doubts?",
    subTitle:
      "Get them resolved over text / video by our expert teaching assistants!",
  },
];
const FlexibilitySection = () => {
  return (
    <section className="flexibility-section">
      <div className="sr-container">
        <h2 className="flexibility__title">
          We have designed a{" "}
          <TextUnderline
            fontWeight="800"
            color="black"
            contents="flexible program"
          />{" "}
          for you
        </h2>
        <div className="flexibility-items-container">
          <Flex classes={["flexibility-items"]}>
            {dataListFlexibility.map((item: IFlexibilityProps) => {
              return <FlexibilityItem {...item} key={`${item.title}`} />;
            })}
          </Flex>
        </div>
      </div>
    </section>
  );
};
export default FlexibilitySection;
