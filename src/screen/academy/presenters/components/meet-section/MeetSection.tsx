import AcademyButton from "components/UI/academy-button/AcademyButton";
import React from "react";
import "./MeetSection.scss";

const MeetSection = () => {
  return (
    <section className="meet section is-padded">
      <div className="sr-container">
        <h3 className="section__header">Get to know us !</h3>
        <p className="section__sub-header">
          Benefit from our <b>free resources</b>
        </p>
        <div className="meets-parent">
          <div className="places">
            <div className="place">
              <div className="place__body">
                <div className="place__img">
                  <img
                    alt="Interview Bit"
                    src="https://assets.scaler.com/assets/academy/svg/IB-fd6e7529e271ec70d81ef76e8c2cde25b2adefebc719b82dfb838349fb97a9e0.svg.gz"
                  />
                </div>
                <div className="place__content">
                  A platform loved by <b>hundred thousands of engineers</b> from
                  across the globe, IB helps you learn and practice DSA and
                  System Design through a structured library of{" "}
                  <b>real-life interview questions</b>
                </div>
              </div>
              <div className="place__link">
                <a
                  href="https://www.interviewbit.com/practice/"
                  target="_blank"
                >
                  Visit Interviewbit
                </a>
              </div>
            </div>
            <div className="place">
              <div className="place__body">
                <div className="place__img">
                  <img
                    alt="mc"
                    src="https://assets.scaler.com/assets/academy/svg/micro-courses-4dd8e8c494f79a27ed89029a43b5dcb00e204d35b0b3a5ee2cd7c00ba02a088b.svg.gz"
                  />
                  <b>Masterclasses</b>
                </div>
                <div className="place__content">
                  We teach you the basics of some of the most important topics
                  in any rockstar developer’s toolkit, through{" "}
                  <b>1-2 day live classes</b> taken by some of our top Scaler
                  Academy faculty. You can use these especially to{" "}
                  <b>get comfortable with our quality and style of teaching!</b>
                </div>
              </div>
              <div className="place__link">
                <a>Sign up for the next course</a>
              </div>
            </div>
            <div className="place">
              <div className="place__body">
                <div className="place__img">
                  <img
                    alt="ama"
                    src="https://assets.scaler.com/assets/academy/svg/AMA-3d8298d9e3eef7773d210bfc895d60c6f97a18691a5496a477f0f36c15061b60.svg.gz"
                  />
                  <b>Ask Me Anythings (AMAs)</b>
                </div>
                <div className="place__content">
                  Connect live with our{" "}
                  <b>faculty, mentors, students and alumni</b>, who help you get
                  answers to a wide range of questions, ranging from importance
                  of <b>DSA / System Design</b> to clearing{" "}
                  <b>interviews, building a career and achieving success</b>.
                </div>
                <div className="place__social">
                  <div className="place__social-heading">Case these on :</div>
                  <div className="place__social-icons">
                    <a
                      href="https://www.linkedin.com/school/scaleracademy"
                      target="_blank"
                    >
                      <img
                        data-src="https://assets.scaler.com/assets/academy/svg/in-f7a2638d388d5c22ca84619247a24b7bcefd9f23f7a905c80c360d985b6eea72.svg.gz"
                        alt="https://www.linkedin.com/school/scaleracademy"
                        src="https://assets.scaler.com/assets/academy/svg/in-f7a2638d388d5c22ca84619247a24b7bcefd9f23f7a905c80c360d985b6eea72.svg.gz"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/scaleracademy"
                      target="_blank"
                    >
                      <img
                        data-src="https://assets.scaler.com/assets/academy/svg/fb-96a10956be30357a11873761ba774563e69aeb63e7f4020064f53ddf90a8f308.svg.gz"
                        alt="https://www.facebook.com/scaleracademy"
                        src="https://assets.scaler.com/assets/academy/svg/fb-96a10956be30357a11873761ba774563e69aeb63e7f4020064f53ddf90a8f308.svg.gz"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/scaler?sub_confirmation=1"
                      target="_blank"
                    >
                      <img
                        data-src="https://assets.scaler.com/assets/academy/svg/youtube-ae11750ce64af6ba9bc649e01f947063838e58346678a548067a648382fc002e.svg.gz"
                        alt="https://www.youtube.com/scaler?sub_confirmation=1"
                        src="https://assets.scaler.com/assets/academy/svg/youtube-ae11750ce64af6ba9bc649e01f947063838e58346678a548067a648382fc002e.svg.gz"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="place__link">
                <a>Register for next AMA</a>
              </div>
            </div>
          </div>
        </div>
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
export default MeetSection;
