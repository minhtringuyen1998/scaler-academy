import { Container, Modal, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState, store } from "store";
import { ModalName } from "utils/modalName";
import { ImageAvatar, ImageCompany, HeaderModal } from "./style";
interface IPeopleModalInfoProps {
  onHide: () => void;
}
const PeopleModalInfo = (props: IPeopleModalInfoProps) => {
  const { onHide } = props;
  const isShow =
    useSelector((state: RootState) => state.modalSlice.nameModal) ===
    ModalName.MODAL_PEOPLE_INFO;
  const dataPeople = useSelector(
    (state: RootState) => state.modalSlice.dataModal
  );
  return (
    <Modal show={isShow} centered onHide={onHide}>
      <HeaderModal closeButton>
        <p className="fw-800">More Detail</p>
      </HeaderModal>
      <Modal.Body style={{ padding: "10px 30px" }}>
        <Container fluid>
          <Row className="mb-3">
            <Col xs md={4}>
              <ImageAvatar src={dataPeople.image_url} />
            </Col>
            <Col md="auto">
              <p className="fw-800">{dataPeople.name}</p>
              <ImageCompany src={dataPeople.company_logo_url} />
            </Col>
          </Row>
          <Row>
            <ul>
              {dataPeople.about &&
                dataPeople.about
                  .split(". ")
                  .map((quote: string, index: number) => {
                    return <li key={index}>{quote}</li>;
                  })}
            </ul>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default PeopleModalInfo;
