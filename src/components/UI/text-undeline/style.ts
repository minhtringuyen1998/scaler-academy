import styled from 'styled-components';
import { ITextUndelineProps } from './TextUnderline';

export const Text  = styled.span<ITextUndelineProps> `
display: inline-block;
background-image: url("https://assets.scaler.com/assets/academy/svg/highlighter-8c0b59f762f05e078f2ca0caa5bb38a2a9056113e6164e30e145ec068a5e384d.svg");
background-position: 0px ${props => props.position || "33px" };
background-repeat: no-repeat;
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize};
color : ${props => props.color};
height: inherit;
line-height: 1.7;
`



