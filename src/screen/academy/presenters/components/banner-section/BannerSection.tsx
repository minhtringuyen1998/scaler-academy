import AcademyButton from "components/UI/academy-button/AcademyButton";
import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React from "react";
import "./BannerSection.scss";
const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="sr-container">
        <div className="banner__container">
          <div className="banner__content">
            <h1 className="banner__title">
              {`A structured, flexible & guided learning program`}{" "}
            </h1>
            <p className="banner__subtitle bold">
              Now experience academy for{" "}
              <TextUnderline
                fontSize={30}
                color="#ffffff"
                fontWeight="800"
                contents="FREE"
                position="25px"
              />
            </p>
            <div className="banner__group">
              <div className="banner__group-button">
                <AcademyButton
                  classes={["banner-book-btn", "bold"]}
                  variant="secondary"
                  mode="solid"
                  content="BOOK A LIVE CLASS"
                />
                <AcademyButton
                  classes={["banner-book-btn", "bold"]}
                  variant="light"
                  mode="solid"
                  content="EXPLORE ACADEMY"
                />
              </div>
              <p className="last-title bold">
                Next Batch Starts <span>MID-MARCH</span>
              </p>
            </div>
          </div>
          <div className="banner__img">
            <div className="banner-hexagon_container">
              <div className="hexagon"></div>
            </div>
            <div className="banner-hexagon_container">
              <div className="hexagon"></div>
            </div>
            <img
              alt="Scaler Academy Banner Image"
              src="https://assets.scaler.com/assets/academy/png/boy-93234ea365d9b1fa3db64b4117795c1351df4a7e2ebf8889ac1d62ae2c1e5643.png.gz"
            />
            <img
              alt="Scaler Academy Banner Image"
              src="https://assets.scaler.com/assets/academy/png/shruti-8dca2cceaed94fe1b6f17184e38475f2ebcfe5d79fff4edb24047ff7ce2c39a6.png.gz"
            />
            <img
              src="https://assets.scaler.com/assets/academy/png/paridhi-0cb71ee9959e65dab699ffb75f4b9395cf4c6985f8afc67579b77d5460aabbde.png.gz"
              alt="Scaler Academy Banner Image"
            ></img>
            <div className="banner-hexagon_container">
              <div className="hexagon"></div>
            </div>
            <div className="banner-hexagon_container">
              <div className="hexagon"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(BannerSection);
