import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#90ee90', height: '100vh' }} className='rounded container-fluid'>
                <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                        <h1 style={{ fontSize: "80px" }} className='fw-bolder text-light'><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem minus eum quaerat! Reprehenderit, veniam, cupiditate magni incidunt perspiciatis, tempore hic ratione quaerat vitae sint temporibus ipsum ducimus fugiat officia eaque.</p>
                        <button className='btn btn-warning'>Start to explore</button>
                    </Col>
                    <Col>
                        <img style={{ marginTop: '100px' }} className='w-75' src='https://png.pngtree.com/png-clipart/20210308/original/pngtree-online-collaborative-data-analysis-office-scene-flat-illustration-png-image_5767260.jpg' alt='' />
                    </Col>
                </Row>
            </div>
            {/* all projects */}
            <div className='all-projects mt-5'>
                <h1 className='text-center'>Explore our Projects</h1>
                <marquee scrollAmount={20}>
                    <div className='d-flex justify-content-between'>
                        <div style={{width:'500px'}}>
                            <ProjectCard />
                        </div>
                        <div className='ms-5' style={{width:'500px'}}>
                            <ProjectCard />
                        </div>
                        <div className='ms-5' style={{width:'500px'}}>
                            <ProjectCard />
                        </div>
                    </div>
                </marquee>
                <div className='text-center mt-5' >
                    <Link to={'/projects'}>View More Projects</Link>
                </div>
            </div>
        </>
    )
}

export default Home;