import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                           <label> <input type="file" style={{display:'none'}} /><img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" alt="" /></label>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Project Title' /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Language Used' /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Website Link' /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Github Link' /></div>
                            <div className='mb-3'><input className='form-control' type="text" placeholder='Project Overview' /></div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject