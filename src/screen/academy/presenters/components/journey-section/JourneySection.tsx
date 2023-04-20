import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React from "react";
import { renderKeyProps } from "utils/fnc";
import JourneyCard from "./components/JourneyCard/JourneyCard";
import "./JourneySection.scss";
let dataJourneyCards = [
  {
    bgImage:
      "https://assets.scaler.com/assets/academy/svg/carousel-1-f8b2a8715c72d8a7ee95dee86294c20875ab6961b6c5d51c4e4b1ef7ba1f6ce5.svg.gz",
    title: "Easy Registration",
    content:
      "In <2 minutes, make a new account or login using social media / Interviewbit",
  },
  {
    bgImage:
      "https://assets.scaler.com/assets/academy/svg/carousel-2-9564cde8d38ebab1459025fdef2ce4ab5234c0eb513f8adcb2f1372239658666.svg.gz",
    title: "Quick Evaluation",
    content:
      "Simple 30 minutes MCQ test, focused on aptitude and basic coding to find the right course for you",
  },
  {
    bgImage:
      "https://assets.scaler.com/assets/academy/svg/carousel-3-2e0b3720f1392a3e14891c535812590f2fbbd783345b01fafd9b31e490478a81.svg.gz",
    title: "Enroll in your course",
    content:
      "Sign up with our various EMI options to swiftly kickstart your learning journey",
  },
  {
    bgImage:
      "https://assets.scaler.com/assets/academy/svg/carousel-4-00d16bc0a8527953681077555f504bd54ca8cc03896d1272ad62ffc77d116eb8.svg.gz",
    title: "Upgrade your batch!",
    content:
      "Want a shorter course? Take the coding challenge after enrollment",
  },
];

const JourneySection = () => {
  return (
    <section className="section journey-section">
      <div className="sr-container">
        <h3 className="section__header">
          <b>
            <TextUnderline contents="Start your learning" /> journey
          </b>{" "}
          or make some Maggi? In 2 minutes, you can do <br /> both!
        </h3>
        <div className="journey-cardSet">
          <div className="journey-cards">
            {dataJourneyCards.map((journey: any, index: number) => {
              return (
                <JourneyCard
                  {...journey}
                  order={index + 1}
                  key={renderKeyProps(journey, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default JourneySection;
