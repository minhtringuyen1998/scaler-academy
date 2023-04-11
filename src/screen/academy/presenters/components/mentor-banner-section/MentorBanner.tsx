import AcademyButton from "components/UI/academy-button/AcademyButton";
import React from "react";
import "./MentorBanner.scss";

const MentorBanner = () => {
  return (
    <section className="mentor-banner-section">
      <div className="banner-container">
        <div className="img-wrapper">
          <img
            src="https://assets.scaler.com/assets/scaler/png/Group 242-ad5ecbe718f9788691d11aa1b9bfaa5d5c889fbcbeb806f4e73de269007c05f3.png.gz"
            alt="img banner"
          />
        </div>
        <div className="content-banner">
          <p className="title">Become a Scaler Mentor</p>
          <p className="sub-title">
            A chance to give back to the community. Mentor Scaler students and
            help them unlock their true potential.
          </p>
        </div>
        <div className="button-knowmore">
          <AcademyButton
            classes={["banner-book-btn", "bold"]}
            variant="light"
            mode="solid"
            content="Know more"
          />
        </div>
      </div>
    </section>
  );
};
export default MentorBanner;
