import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";

class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateFav}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  defaultValue={this.props.modalData.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>img url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter img url"
                  name="img"
                  defaultValue={this.props.modalData.img}
                />
              </Form.Group>

              <button className="btn btn-primary">Save</button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
