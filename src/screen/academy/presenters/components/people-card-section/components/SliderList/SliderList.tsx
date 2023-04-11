import React, { Children, ReactElement } from "react";
import "./SliderList.scss";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import Slider, { Settings } from "react-slick";
interface ISliderListProps extends Settings {
  children?: ReactElement[];
  settings?: Settings;
  autoplay: boolean;
  slideToShow?: number;
}
const SliderList = (props: ISliderListProps) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="next arrow" onClick={onClick}>
        <CgChevronRight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="prev arrow" onClick={onClick}>
        {" "}
        <CgChevronLeft />
      </div>
    );
  };
  const {
    children,
    settings,
    autoplay = true,
    slideToShow = 4,
    slidesToScroll = 2,
  } = props;
  const resp = [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <Slider
      autoplay={false}
      slidesToShow={slideToShow}
      slidesToScroll={slidesToScroll}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      responsive={resp}
      {...settings}
    >
      {children}
    </Slider>
  );
};
export default SliderList;
