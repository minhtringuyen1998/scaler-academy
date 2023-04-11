import styled from "styled-components";
import { Modal } from "react-bootstrap";
export const ImageAvatar = styled.img`
  width: 126px;
  height : 79px;
  border-radius: 10%;
  object-fit: cover;
`
export const NamePeople = styled.p`
font-weight: 800;
`
export const ImageCompany = styled.img`
height : 36px;

`
export const HeaderModal = styled(Modal.Header)`
border-bottom: unset;
p{
  font-size: 24px;
  color : #0041ca;
  margin-right: 10px;
}
`