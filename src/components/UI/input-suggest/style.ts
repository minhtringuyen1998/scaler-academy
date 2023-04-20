import { IOption } from "interface";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  max-width: 100%;
  position: relative;
  border: 1.5px solid #e2e2e2;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  max-height: 45px;
  & > .selected {
    justify-content: flex-start;
    padding-left :5px
  }
`
export const Option= styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  color : black;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
  min-height: 45px;
  img {
    vertical-align: bottom;
    margin-bottom: 2px;
  }
  padding :10px;
  border: 1.5px solid transparent;
  &:focus-within {
    border: 1.5px solid blue;
    border-radius: 4px;

  }
`
export const IconWrapper = styled.span`
`
export const InputSuggest = styled.input`
background-color: transparent;
border: unset;
outline: none;
max-width:50px;
height: 100%;

`
export const Options = styled.div<{show : boolean}>`
/* background-color: rgba(0,65,202,0.1); */
position: absolute;
background-color: white;
width: calc(100% + 3px);
top: 105%;
left: -1px;
border-radius: inherit;
border: ${props => props.show ? "inherit" : "unset"};
height: ${props => props.show ? "300px" : 0};
overflow-x: hidden;
overflow-y: scroll;
z-index: 103;
& > .selected {
    background-color: rgba(0,65,202,0.1); 
  }
& > .dropdown-item {
  &:hover {
    background-color: rgba(0,65,202,0.2);

  }
  display: block;
    .iti__flag {
      margin-right: 5px;
      display: inline-block;
    }
    span {
      display: inline;
    }
} 
`
export const IconDropdown = styled.div<{animation : boolean}>`
  position: absolute;
  right: 3px;
  top :50%;
  transform: translateY(-50%);
  ${props => props.animation ? `
     transform: rotate(-3.142rad) translateY(50%);
     transition: 0.4s ease;
  ` : ""}
`