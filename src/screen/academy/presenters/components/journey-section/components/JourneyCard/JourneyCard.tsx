import React from "react";
import { JourneyCardWrapper } from "./styles";
export interface IJouneyCardProps {
  bgImage: string;
  content?: string;
  title?: string;
  order?: number;
}
const JourneyCard = (props: IJouneyCardProps) => {
  const { bgImage, content, title, order } = props;
  return (
    <JourneyCardWrapper bgImage={bgImage}>
      <div className="journey__order">{order}.</div>
      <div className="journey__title">{title}</div>
      <div className="journey__content">{content}</div>
    </JourneyCardWrapper>
  );
};
export default JourneyCard;
