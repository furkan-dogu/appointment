import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose, drName, handleAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointments = {
      id: new Date().getTime(),
      patient: name,
      day: date,
      doctor: drName,
      consulted: false,
    };
    handleAdd(newAppointments);
    handleClose()
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Reservation for <span className="text-info">{drName}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center m-2 gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" type="button" onClick={handleClose}>
            Close
          </Button>
        </div>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default AddModal;
