import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { delteProjectAPI, userProjectAPI } from '../Services/allAPI'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare';
import { Alert } from 'react-bootstrap';
import EditProject from './EditProject';

function MyProjects() {
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
    const {addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)   

    const [userProjects, setUserProjects] = useState([])
    const getUserProjects = async () => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token')
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await userProjectAPI(reqHeader)
            if (result.status === 200) {
                setUserProjects(result.data)
            } else {
                // console.log(result);
                toast.warning(result.response.data)
            }
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [addProjectResponse,editProjectResponse])

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await delteProjectAPI(id, reqHeader)
        if (result.status === 200) {
            // page reload
            getUserProjects()
        }
        else{
            toast.error(result.response.data)
        }
    }

    // console.log(userProjects)
    return (
        <>
            <div className="card shadow p-3">
                <div className='d-flex'>
                    <h2>My Projects</h2>
                    <div className='ms-auto'> <AddProject /> </div>
                </div>
                {
                    addProjectResponse ? <Alert className='bg-success' dismissible><span>{addProjectResponse.title}</span> Added Successfully!!!</Alert> : null
                }
                <div className='mt-4'>
                    {/* {Collection of User Projects} */}
                    {userProjects?.length > 0 ? userProjects.map(project => (
                        <div className="border d-flex align-items-center rounded p-3">
                            <h5>{project.title} </h5>
                            <div className="icon ms-auto">

                                {/* <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button> */}
                                <EditProject project={project} />
                                <a href={`${project.github}`} target='_blank' className='btn'><i className="fa-brands fa-github"></i></a>
                                <button onClick={() => handleDelete(project._id)} className='btn'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>

                    )) :
                        <p className="text-danger fw-bolder">No Projects Uploaded yet!!!</p>

                    }

                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} draggable
                pauseOnHover
                theme="colored" />
        </>
    )
}

export default MyProjects