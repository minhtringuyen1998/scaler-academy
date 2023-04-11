import React from "react";
import { IMentor } from "utils/data";
import "./TestimonialCard.scss";
interface ITestimonialCard extends IMentor {}
const TestimonialCard = (props: ITestimonialCard) => {
  const {
    image_url,
    name,
    company_logo_url,
    role,
    pre_academy_segment,
    batch,
    about,
    linkedin,
  } = props;
  return (
    <div className="testimonial-card">
      <div className="testimonial__wrapper">
        <div className="testimonial__info">
          <div className="testimonial__info-content">
            <div className="testimonial__info-avatar">
              <img src={image_url} alt="Mentor Avarta" />
            </div>
            <div className="testimonial__info-mentor">
              <p className="testimonial__info-name">{name}</p>
              <p className="testimonial__role">{role}</p>
              <div className="tesimonial__company-img">
                <img src={company_logo_url} alt="Company Image" />
              </div>
            </div>
          </div>
          <div className="scaler-logo">
            <img
              className="scaler"
              src="https://assets.scaler.com/assets/academy/svg/scaler-logo-3186d07c6e09a5adf40102518812e5746d8476829f276493ebf9ca40350c6787.svg.gz"
              alt="Scaler Academy"
            />
          </div>
        </div>
        <div className="testimonial__about">
          <p className="testitmonial__about-content">{about}</p>
        </div>
        <div className="testitmonial__linked">
          <a href={linkedin} target="_blank">
            Read more on scaler
          </a>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
