import styled from "styled-components"

export const FormSignUpContainer = styled.div`
display: flex;
flex-flow:  column nowrap;
gap : 20px;
`
export const Form = styled.form`
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
export const Capchar = styled.div`
&> #recapchar {
      .grecaptcha-badge {
            display: inline !important;
            position: unset !important;
      }
}
`