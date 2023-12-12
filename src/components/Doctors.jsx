import Container from "react-bootstrap/Container"
import { doctorData } from "../helper/data"
import { Col, Row, Image } from "react-bootstrap"
import AddModal from "./AddModal"
import { useState } from "react"

const Doctors = ({handleAdd}) => {
  const [show, setShow] = useState(false); 
  const [drName, setDrName] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true)
    setDrName(name)
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
      {doctorData.map(({id,name,img,dep}) => (
        <Col md={4} sm={6} lg={3} key={id} role="button">
          <Image src={img} alt={name} className="img-thumbnail doctor-img" onClick={() => handleShow(name)}/>
          <div>
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </div>
        </Col>
      ))}
      </Row>

      <AddModal show={show} handleClose={handleClose} drName={drName} handleAdd={handleAdd} />
    </Container>
  )
}

export default Doctors
