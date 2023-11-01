import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='card shadow p-5'>
                <div className='d-flex justify-content-between'>
                    <h2>My Profile</h2>
                    <button onClick={() => setOpen(!open)} className='btn btn-outline-info d-flex align-items-center' style={{border:'none',outline:'none'}}><i class="fa-solid fa-angle-down"></i></button>
                </div>
               <Collapse in={open}>
                    <div className='row justify-content-center mt-3'>
                        {/* Upload Picture */}
                        <label className='text-center'>
                            <input type="file" style={{ display: 'none' }} />
                            <img width={'200px'} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Upload picture" />
                        </label>
                        <div className="mt-3">
                            <input type="text" className='form-control' placeholder='Github' />
                        </div>
                        <div className="mt-3">
                            <input type="text" className='form-control' placeholder='Linkedin' />
                        </div>
    <div className='mt-3 text-center'>
        <button className='btn btn-warning '>Update</button>
    </div>
                    </div>
               </Collapse>
            </div>
        </>
    )
}

export default Profile