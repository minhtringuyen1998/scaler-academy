import Flex from "components/UI/flex/Flex";
import React, { useEffect } from "react";
import ItemFeature, {
  ItemFeatureProps,
} from "./components/item-feature/ItemFeature";
import "./FeatureSection.scss";

const dataFeature: ItemFeatureProps[] = [
  {
    title: "Structured, industry vetted curriculum ",
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/structured-c36517d8d41efb3a24cbcb3fe1c8b27ffcfacb6b1462ec3e60516504a07eaff6.svg.gz",
    variants: "primary",
  },
  {
    title: "Live classes by faculty ",
    subTitle: "who have been there, done that",
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/live-classes-afff2e39f63a26a19ee4ae844d4b0891c20c50e4b670a224564640cbb973f867.svg.gz",
    variants: "danger",
  },
  {
    title: "Practical experience ",
    subTitle: "through real-life projects",
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/project1-9fc6130d4e271198d5f051da0712b27627c872a353dac61c91f248e4f60b6ddf.svg.gz",
    variants: "success",
  },
  {
    title: "Regular 1:1 mentorship ",
    subTitle: "from industry veterans",
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/flexibility-94067174b36a4a38b3448219f64ccd3e42b3f32667c5ff0ec8d8fab665525d87.svg.gz",
    variants: "secondary",
  },
  {
    title: "Career support ",
    subTitle: "via a dedicated recruitment team, alumni network, etc.",
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/career-support-c92399914995cba52680341de44c1ce49d292b1de0f10aeb58c3c58a79e3ad3b.svg.gz",
    variants: "warning",
  },
  {
    img: "https://assets.scaler.com/assets/academy/svg/at-a-glance/mentor-efc7b3e100e7f2bd17f1f95f4ca28b5205ac3f4e04d4cddd064a800cc63f1c74.svg.gz",
    title: "Aspirational peer group ",
    subTitle: "of 2,000+ Scaler students & alumni",
    variants: "purple",
  },
];
const FeatureSection = () => {
  return (
    <section className="feature-container">
      <div className="sr-container">
        {" "}
        <div className="glance-content">
          <p className="glance-title">
            A program for engineers to master{" "}
            <b>{`Problem Solving & System Design`}</b>
          </p>
          <Flex classes={["feature-items-container"]}>
            {dataFeature.map((item: ItemFeatureProps) => {
              return <ItemFeature {...item} key={`${item.title}`} />;
            })}
          </Flex>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
