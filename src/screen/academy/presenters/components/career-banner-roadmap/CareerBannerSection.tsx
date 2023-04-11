import AcademyButton from "components/UI/academy-button/AcademyButton";
import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React from "react";
import "./CareerBannerSection.scss";
const CareerBannerSection = () => {
  return (
    <section className="section is-padded career-banner-section">
      <div className="sr-container">
        <h3 className="section__header">
          Confused about which company to target next?{" "}
          <b>
            <TextUnderline contents="Try Our FREE Career" />
          </b>{" "}
          <br />
          <b>Roadmap.</b>
        </h3>
        <div className="wrapper-btn">
          <AcademyButton
            variant="secondary"
            content="GET FREE CAREER ROADMAP"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerBannerSection;
