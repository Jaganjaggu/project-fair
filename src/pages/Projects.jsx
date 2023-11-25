import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
    const [searchKey,setSearchKey] =useState("")
    const [allProjects, setAllProjects] = useState([])
    const getallProjects = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await allProjectsAPI(searchKey,reqHeader)
            console.log(searchKey);
            if (result.status === 200) {
                setAllProjects(result.data)
            } else {
                console.log(result)
            }
        }
    }

    useEffect(() => {
        getallProjects()
    }, [searchKey])
    return (
        <>
            <Header />
            <div style={{ marginTop: '100px' }} className='projects'>
                <h1 className='text-center mb-5'>All Projects</h1>
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className='d-flex align-items-center border w-50 rounded'>
                        <input type="text" className='form-control' placeholder='Search project by technology used'  value={searchKey} onChange={e=>setSearchKey(e.target.value)}/>
                        <i style={{ marginLeft: '-30px' }} class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <Row className='mt-5 container-fluid'>
                    {allProjects?.length > 0 ? allProjects?.map(project => (
                        <Col sm={12} lg={4} md={6}>
                            {console.log(project)}
                            <ProjectCard project={project}/>
                        </Col>
                    )):<p>Please Login</p>

                    }
                </Row>
            </div>
        </>
    )
}

export default Projects