import styled from "styled-components"

export const BackDrop  = styled.div<{open : boolean}>`
      background-color: black;
      opacity: 0.6;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: ${props => props.open ? "block" : "none"};
      overflow: hidden;
      z-index: 100;
`
export const Container = styled.div`
position: relative;
`
export const LoginContainer = styled.div<{open : boolean}>`
position: fixed;
top: 0;
right: 0;
max-width: 585px;
width: 100%;
background-color: white;
height: 100%;
z-index: 101;
transform: ${  props => props.open  ? "transform: translateX(0)" :  "translateX(100%)"} ;
will-change: transform;
transition: 360ms;
overflow-y: auto;
@media (max-width: 414px) {
    transform  : ${  props => props.open  ? "transform: translateY(0)" :  "translateY(100%)"};
    height: 80%;
    bottom:0 ;
    top : unset
}
`
export const Header = styled.div`
padding :20px;
display: flex;
justify-content: flex-end;
align-items: center;
.icon__close {
      cursor: pointer;
}
`
export const Body = styled.div`
padding : 30px;

`
export const FormLogin = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
.text-under {
      border-bottom:2px dotted #1c6bf3;
}
`
export const Line = styled.div`
position: relative;
margin : 10px 0;
text-align: center;
&::before {
      background-color: #e2e2e2;
      content :"";
      position: absolute;
      top : 50%;
      width : 100%;
      height: 2px;
      left: 0;
      z-index: 1;
}
 span {
       padding : 0 10px;
       background-color: white;
       position: relative;
       z-index: 2;
 }
`
export const SocialIcons = styled.div`
display: flex;
flex-direction: row;
flex-wrap:  nowrap;
justify-content: flex-start;
gap :30px;
img {
      width: 50px;
      height: 50px;
}
`
export const SocialIcon = styled.div`
`
export const ImgSocial = styled.img``