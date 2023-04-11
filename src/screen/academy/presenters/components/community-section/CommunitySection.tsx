import TextUnderline from "components/UI/text-undeline/TextUnderline";
import React, { useEffect, useRef } from "react";
import "./CommunitySection.scss";

const CommnunitySection = (props: any) => {
  const data: string[] = [
    "Information on Job Openings",
    "Project Collaboration",
    "Authentic Interview Experiences",
    "Competitive Coding",
    "Major Announcements",
  ];
  const [itemNameActive, setItemNameActive] = React.useState(data[0]);
  const handleActiveItem = (item: string, inItClassName: string) => {
    if (itemNameActive === item) return inItClassName + " " + "item-active";
    return inItClassName;
  };
  let count = useRef(0);
  useEffect(() => {
    setInterval(() => {
      if (count.current >= data.length) {
        setItemNameActive(data[0]);
        count.current = 0;
      } else {
        setItemNameActive(data[count.current]);
        count.current++;
      }
    }, 3000);
  }, []);
  return (
    <section className="section scaler-chat is-padded">
      <div className="sr-container">
        <h3 className="section__header">
          In education and in life, an{" "}
          <strong>
            <TextUnderline contents="aspirational peer group" position="33px" />
          </strong>{" "}
          always takes <strong>learning to the next level</strong>. Your peers
          inspire you to be better
        </h3>
        <p className="section__sub-header fw-800">
          Via <span className="blue">Scaler</span>
          <span className="dark-blue">Chat</span>, you can interact with your
          peers across all classes and batches and even our alumni. Collaborate
          on projects, share job referrals &amp; interview experiences, compete
          with the best, make new friends - the possibilities are endless and
          our community has something for everyone!
          <br />
          <b> Here are some of the many useful channels on ScalerChat:</b>
        </p>
        <div className="scaler-chat__body">
          <div className="scaler-chat__list">
            <div
              className={handleActiveItem(data[0], "scaler-chat__list-item ")}
            >
              <div className="scaler-chat__item-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/job-openings-1b5eba98d164204b0ceecad4bfba7db4cd3484bfc2ef9ddb2e6114c98d7f06ea.svg.gz"
                  alt="Information on Job Openings"
                />
              </div>
              <div className="scaler-chat__item-active-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/job-openings-selected-d46ebe4f4ea0c3722620fedfd3445327993625e622d9741248e6a014f1d612ec.svg.gz"
                  alt="Information on Job Openings"
                />
              </div>
              <div className="scaler-chat__item-desc">
                Information on Job Openings
              </div>
            </div>
            <div
              className={handleActiveItem(data[1], "scaler-chat__list-item ")}
            >
              <div className="scaler-chat__item-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/project-collaborations-bf9fe3ce8bfbfd46b2e5f0927f4dd4f062506d278d69bfc27eb546ef1f2e2f55.svg.gz"
                  alt="Project Collaboration"
                />
              </div>
              <div className="scaler-chat__item-active-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/project-collaborations-selected-a5130a9df783aa8e4939d301086cbf4f7f78bcd54a8fee77980ee4569e3afeef.svg.gz"
                  alt="Project Collaboration"
                />
              </div>
              <div className="scaler-chat__item-desc">
                Project Collaboration
              </div>
            </div>
            <div
              className={handleActiveItem(data[2], "scaler-chat__list-item")}
            >
              <div className="scaler-chat__item-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/authentic-interview-experiences-b40069a6205981dc858042a3ef9fcb692979d95f27c805c13f628036113613d3.svg.gz"
                  alt="Authentic Interview Experiences"
                />
              </div>
              <div className="scaler-chat__item-active-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/authentic-interview-experiences-selected-5eda2b1275623b9253ed40a62069945f930d23d309004d621e1f3d3c9e822d3a.svg.gz"
                  alt="Authentic Interview Experiences"
                />
              </div>
              <div className="scaler-chat__item-desc">
                Authentic Interview Experiences
              </div>
            </div>
            <div
              className={handleActiveItem(data[3], "scaler-chat__list-item")}
            >
              <div className="scaler-chat__item-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/competitive-coding-0fce677bcac2335ad8580ddc4075e83deda9c6f406f72061dda65319fd0908a2.svg.gz"
                  alt="Competitive Coding"
                />
              </div>
              <div className="scaler-chat__item-active-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/competitive-coding-selected-1cb72aeff28f9fd5d196836f5339e0cfac77a0aab7f80bb5787a9e186d9f8201.svg.gz"
                  alt="Competitive Coding"
                />
              </div>
              <div className="scaler-chat__item-desc">Competitive Coding</div>
            </div>
            <div
              className={handleActiveItem(data[4], "scaler-chat__list-item")}
            >
              <div className="scaler-chat__item-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/announcement-e68649358703255b51556b042a3a6cad74b460e84cefb371dd564bc3a9fce48b.svg.gz"
                  alt="Major Announcements"
                />
              </div>
              <div className="scaler-chat__item-active-icon">
                <img
                  src="https://assets.scaler.com/assets/academy/svg/announcement-selected-5910f2825e451ad2a554a6f28c8bd2a886a65cbda61b7a54e325bf258ee6d14d.svg.gz"
                  alt="Major Announcements"
                />
              </div>
              <div className="scaler-chat__item-desc">Major Announcements</div>
            </div>
          </div>
          <div className="scaler-chat__content">
            <div className={handleActiveItem(data[0], "scaler-chat__image")}>
              <img
                src="https://assets.scaler.com/assets/academy/png/chat-1-2d10a2d51deab39986dc5b3fa1546214fd5fadc502e81c190cdff0ab7e8a9eb5.png.gz"
                alt="Information on Job Openings"
              />
            </div>
            <div className={handleActiveItem(data[1], "scaler-chat__image")}>
              <img
                src="https://assets.scaler.com/assets/academy/png/chat-2-6a9c78b6fd8e923d2a40e775b4b163dd428215c2028017306332cd05decb76f3.png.gz"
                alt="Project Collaboration"
              />
            </div>
            <div className={handleActiveItem(data[2], "scaler-chat__image")}>
              <img
                src="https://assets.scaler.com/assets/academy/png/chat-3-e6b94d2190c09ff1957db46db5c42c0fa6bca31537a6cdf50129bdb1d75e39f2.png.gz"
                alt="Authentic Interview Experiences"
              />
            </div>
            <div className={handleActiveItem(data[3], "scaler-chat__image")}>
              <img
                src="https://assets.scaler.com/assets/academy/png/chat-4-0851e7a45cf11cbb283e0541af682e84afcf9b95042d3db27c37285b38c1ff99.png.gz"
                alt="Competitive Coding"
              />
            </div>
            <div className={handleActiveItem(data[4], "scaler-chat__image")}>
              <img
                src="https://assets.scaler.com/assets/academy/png/chat-5-0745d38f752e70e29596c8d3194b91fd944bc220c5267ae7fb83a9f4c378cb9e.png.gz"
                alt="Major Announcements"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommnunitySection;
