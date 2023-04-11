import React from "react";
import { IMentor } from "utils/data";
import "./PeopleCard.scss";
interface IPeopleCard extends IMentor {
  onOpenModal: () => void;
}
const PeopleCard = (props: any) => {
  const { image_url, name, company_logo_url, role, linkedin, onOpenModal } =
    props;
  const getFirstName = (str: string) => {
    let aName = str.split(" ");
    let name = aName[1] ? aName[0] + " " + aName[1] : aName[0];
    return name;
  };
  return (
    <div className="people__card">
      <div className="wrapper">
        <a className="people__card-image" href={linkedin} target="_blank">
          <img className="avatar" src={image_url} alt="Mentor Image" />
          <img
            src="https://assets.scaler.com/assets/academy/svg/linkedin-d172807157222c7b89ba834569e904401eaff62221bc2d89ef7b330acc52a563.svg.gz"
            className="linked-img"
          />
        </a>
        <div className="people__card-info">
          <p className="name">{getFirstName(name)}</p>
          <div className="img-company-w">
            Ex <img src={company_logo_url} alt="company img" />
          </div>
          <div onClick={onOpenModal} className="people__card-readmore">
            Read more &gt;
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleCard;
