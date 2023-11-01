import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <>
            <Header/>
            <div style={{marginTop:'100px'}} className='projects'>
                <h1 className='text-center mb-5'>All Projects</h1>
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className='d-flex align-items-center border w-50 rounded'>
                        <input type="text" className='form-control' placeholder='Search project by technology used'/>
                        <i style={{marginLeft:'-30px'}} class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <Row className='mt-5 container-fluid'>
                    <Col sm={12} lg={4} md={6}>
                        <ProjectCard/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Projects