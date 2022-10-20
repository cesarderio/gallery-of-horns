import React from "react";
import { Modal } from "react-bootstrap";
import "../CSS/SelectedBeast.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          backdrop="static"
          keyboard="false">
          <Modal.Header>
            <Modal.Title className="modal-title w-100">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <img
                src={this.props.src}
                alt={this.props.alt}
                style={{ width: "100%" }}
              />
              {this.props.alt}
            </Container>
          </Modal.Body>
          <Modal.Footer className="modal-footer content-center mx-auto d-block text-center">
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
