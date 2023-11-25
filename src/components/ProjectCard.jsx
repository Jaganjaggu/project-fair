import React, { useState } from 'react'
import { Card, Modal, Row, Col } from 'react-bootstrap'
import projectPic from '../assets/login.png'
import { BASE_URL } from '../Services/baseurl';

function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {project &&
          <Card className='shadow mb-5 btn' onClick={handleShow}>
                <Card.Img  style={{ height: '200px' }} variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic}/>
                <Card.Body>
                    <Card.Title>{project?.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>}
            <Modal show={show} size='lg' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img style={{ height: '200px' }} src={project?`${BASE_URL}/uploads/${project.projectImage}`:projectPic} alt="" />
                        </Col>
                        <Col md={6}>
                            <h2>{project.title}</h2>
                            <p>Project Overview: <span className='fw-bolder'>{project.overview}</span></p>
                            <p>Language Used: <span className='fw-bolder'>{project.languages}</span></p>
                        </Col>

                    </Row>
                    <div className='mt-3'>
                        <a href={project.github} target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                        <a href={project.website} target='_blank' className='me-5 btn'><i class="fa-solid fa-link fa-2x"></i></a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard