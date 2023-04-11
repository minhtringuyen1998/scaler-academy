import styled from "styled-components";
import {IJouneyCardProps} from "./JourneyCard"
interface IJouneyCardPropsStyle extends IJouneyCardProps {}
export const JourneyCardWrapper = styled.div<IJouneyCardPropsStyle>`
background-image : url(${props => props.bgImage});
background-size: cover;
background-repeat: no-repeat;
margin: 10px;
padding : 20px;
flex :1;
color : #ffffff;
border-radius: 8px;
overflow: hidden;
& > .journey__order {
  color: inherit;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 120px;
}
& > .journey__title {
    color: inherit;
    font-weight: 800;
    font-size: 24px;
    max-width: 150px;
}
& > .journey__content {
  color : inherit;
  margin-top :20px ;
}
`