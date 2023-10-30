import React, { useState } from 'react'
import { Card, Modal, Row, Col } from 'react-bootstrap'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className='shadow mb-5 btn' onClick={handleShow}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} size='lg' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img style={{ height: '200px' }} src="https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" alt="" />
                        </Col>
                        <Col md={6}>
                            <h2>Project Title</h2>
                            <p>Project Overview: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dicta placeat amet alias deleniti! Rerum debitis qui culpa aliquid eaque, nostrum porro enim, laudantium exercitationem maiores nam perspiciatis suscipit optio.</p>
                            <p>Language Used: <span className='fw-bolder'>HTML,CSS,JS</span></p>
                        </Col>

                    </Row>
                    <div className='mt-3'>
                        <a href="https://github.com/Jaganjaggu/background-color-changer" target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                        <a href="https://background-color-changer-psi.vercel.app/" target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard