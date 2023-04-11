import Flex from "components/UI/flex/Flex";
import React, { useEffect } from "react";
import FlexibilityItem from "../flexibility-section/components/flexibility-item/FlexibilityItem";
import { IFlexibilityProps } from "../flexibility-section/FlexibilitySection";
import "./CareerSection.scss";
let str = `
 <div class="flexibility-card career__card">
     <div class="flexibility-card__title">
         <img class="flexibility-card__image" src="https://assets.scaler.com/assets/academy/svg/employer-d308ffc80a2a4dcd539cdfc4da50dec20698c52fff259ff2dae4eea5dfb15e94.svg.gz">
     </div>
   <div class="flexibility-card__content">
       Dedicated recruiter team &amp; 100+ employer partners help bring you diverse options
   </div>
 </div>,
 <div class="flexibility-card career__card">
     <div class="flexibility-card__title">
         <img class="flexibility-card__image" src="https://assets.scaler.com/assets/academy/svg/community-6fa9a0023c30456b10b76caa66f2de9daff9a4c74cc61bf19892cff4021c2a94.svg.gz">
     </div>
   <div class="flexibility-card__content">
       Exchange job opportunities with our extensive Scaler student community
   </div>
 </div>,
 <div class="flexibility-card career__card">
     <div class="flexibility-card__title">
         <img class="flexibility-card__image" src="https://assets.scaler.com/assets/academy/svg/mock-3ef075c86047b3d501bbef3e91e533db4d3215e30107f5e6645ce11dc7a358eb.svg.gz">
     </div>
   <div class="flexibility-card__content">
       Practice mock interviews with people working in the industry
   </div>
 </div>,
 <div class="flexibility-card career__card">
     <div class="flexibility-card__title">
         <img class="flexibility-card__image" src="https://assets.scaler.com/assets/academy/svg/resume-b9775f453cdc3079a7031ec687839bbdab8b6cadf2c8f68ba0dfaf8e63045e2e.svg.gz">
     </div>
   <div class="flexibility-card__content">
       Optimize your resume &amp; LinkedIn profile with our experienced experts
   </div>
 </div>
`;

const CareerSection = () => {
  const dataListFlexibility: IFlexibilityProps[] = [
    {
      img: "https://assets.scaler.com/assets/academy/svg/employer-d308ffc80a2a4dcd539cdfc4da50dec20698c52fff259ff2dae4eea5dfb15e94.svg.gz",
      subTitle:
        "Dedicated recruiter team &amp; 100+ employer partners help bring you diverse options",
    },
    {
      img: "https://assets.scaler.com/assets/academy/svg/community-6fa9a0023c30456b10b76caa66f2de9daff9a4c74cc61bf19892cff4021c2a94.svg.gz",
      subTitle:
        "Exchange job opportunities with our extensive Scaler student community",
    },
    {
      img: "https://assets.scaler.com/assets/academy/svg/mock-3ef075c86047b3d501bbef3e91e533db4d3215e30107f5e6645ce11dc7a358eb.svg.gz",
      subTitle: "Practice mock interviews with people working in the industry",
    },
    {
      img: "https://assets.scaler.com/assets/academy/svg/revise-8aceca46e65750c791c12d778669bf01650ef9e02c2d211ba30c6831c34946ab.svg.gz",
      subTitle:
        "Access assignments/notes lifelong and recordings upto 6 months post course completion",
    },
  ];
  return (
    <section className="career-section section">
      <div className="sr-container">
        <h3 className="section__header fw-800">Career Services</h3>
        <p className="section__sub-header">
          Along with preparing you for the job, we also help you prepare for
          your search &amp; your interviews
        </p>
        <Flex classes={["career-list-card"]}>
          {dataListFlexibility.map((item: IFlexibilityProps) => {
            return (
              <FlexibilityItem
                {...item}
                key={`${item.subTitle}`}
                classes={["career-card"]}
              />
            );
          })}
        </Flex>
      </div>
    </section>
  );
};

export default CareerSection;
