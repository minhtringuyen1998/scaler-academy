import React from "react";
import "./AlumiTestimonialCard.scss";
import { Link } from "react-router-dom";
import { IMentor } from "utils/data";
import { BsArrowDown } from "react-icons/bs";
interface IALumiTestimontialProps extends IMentor {
  path: string;
  target: string;
}
const AlumiTestimonialCard = (props: IALumiTestimontialProps) => {
  const {
    path,
    target,
    image_url,
    name,
    company_logo_url,
    role,
    pre_academy_segment,
    batch,
  } = props;
  return (
    <Link to={path} target={target} className="alumni-link-wrapper">
      <div className="alumni-container">
        <div className="alumni-hike">
          <div>
            <span className="icon-hike"></span>
            300% hike
          </div>
        </div>
        <div className="alumni-avatar">
          <img src={image_url} alt="Avartar Mentor" />
        </div>
        <p className="alumni-name">{name}</p>
        <p className="alumni-gradution">{batch}</p>
        <div>
          <div className="alumni__company-label">Pre Scaler</div>
          <div className="alumni__pre-company">{pre_academy_segment}</div>
        </div>
        <div className="transition">
          <BsArrowDown color="#4ea1ff" size={50} />
        </div>
        <div>
          <div className="alumni__company-label">Post Scaler</div>
          <div className="alumni-card__company-url">
            <img src={company_logo_url} alt="Post Company" />
          </div>
        </div>
        <div className="alumni__designation">{role}</div>
      </div>
    </Link>
  );
};
export default AlumiTestimonialCard;
