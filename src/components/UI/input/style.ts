import styled from "styled-components"

export const Input = styled.input<{error? : string , disabled : boolean}>`
  display: inline-block;
  width: 100%;
  border: 1.5px solid  ${props => !props.error ? "#e2e2e2" : "red"};
  padding : 10px;
  background-color: #ffffff;
  font-size: 16px;
  color :black;
  flex : 1;
  border-radius: 4px;
  ${props => props.disabled &&  `
    background-color: #e2e2e2 !important;
    cursor: not-allowed;
  `}
  
`
export const Label = styled.span`
  color : black;
  font-size: 16px;
  font-weight: 800;
`
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`
export const LabelScope = styled.div<{label? : string}>`
  display: ${props => props.label ? "block"  : "none"};
  margin-bottom: 8px;
`
export const Required = styled.span`
    color : red;
    display: inline-block;
    margin-left :5px;
    line-height: 1.3;
`
export const WrapperInput = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap :10px;
  position: relative;
  & > .code__region {
    width: 110px;
  }
`
export const ExplainText = styled.p`
 color : #5b6f81;
 font-size: 14px;
 font-weight : 500;
 line-height: 1;
 margin-bottom: 8px;
`
export const ErrorMessage = styled.span`
display: inline-block;
position: absolute;
top :calc(100% + 4px);
font-size: 14px;
color: red;
line-height: 1;
`
export const TextEdit = styled.span`
color: black;
font-weight: bold;
font-size: 16px;
position: absolute;
display: inline-block;
top :50%;
transform: translateY(-50%);
right: 15px;
border-bottom: 1px dashed gray;
color :gray
`