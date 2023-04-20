import styled from "styled-components";
import { ITypo } from "./Text";

export const Text = styled.span<ITypo>`
display: ${props => !props.inline ? "block" : "inline-block"};
font-size: ${props => props.size};
color : ${props => props.color || "black"};
font-weight: ${props => props.bold};
cursor: ${props => props.isClick ? "pointer" : "unset"};
@media (max-width : 414px) {
  font-size:   calc(${props => props.size || "16px" } - 2px)
}
`
