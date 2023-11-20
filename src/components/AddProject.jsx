import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';

function AddProject() {
    const [projectDetails, setProjectDetails] = useState({
        title: "", language: '', website: '', github: '', overview: '', projectImage: ''
    })
    console.log(projectDetails);
    const [preview, setPreview] = useState('')
    const [show, setShow] = useState(false);
    const [token,setToken] = useState('')

    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title: "", language: '', website: '', github: '', overview: '', projectImage: ''
        })
        setPreview('')
    };
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem('token'))
        }else{
            setToken("")
        }
    },[])

    const handleAdd = async (e) => {
        e.preventDefault()
        const { title, language, website, github, overview, projectImage } = projectDetails
        if (!title || !language || !website || !github || !overview || !projectImage) {
            toast.warning("Please fill the form completely!!!")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("languages", language)
            reqBody.append("website", website)
            reqBody.append("github", github)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)

            if(token){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }

                const result = await addProjectAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    console.log(result.data);
    
                }else{
                    console.log(result);
                    console.log(result.response.data);
                }
            }

           
        }
    }
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Projects
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label> <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} /><img className='img-fluid' src={preview ? preview : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" /></label>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mb-3'><input onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} className='form-control' type="text" placeholder='Project Title' value={projectDetails.title} /></div>
                            <div className='mb-3'><input onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} className='form-control' type="text" placeholder='Language Used' value={projectDetails.language} /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Website Link' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} value={projectDetails.website} /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Github Link' value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Project Overview' value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} /></div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-right" autoClose={2000} draggable
                pauseOnHover
                theme="colored" />
        </>
    )
}

export default AddProject