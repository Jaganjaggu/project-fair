import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
    return (
        <>
            <div className="card shadow p-3">
                <div className='d-flex'>
                    <h2>My Projects</h2>
                    <div className='ms-auto'> <AddProject /> </div>
                </div>
                <div className='mt-4'>
                    {/* {Collection of User Projects} */}
                    <div className="border d-flex align-items-center rounded p-3">
                        <h5>Project title</h5>
                        <div className="icon ms-auto">
                            <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
                            <button className='btn'><i class="fa-brands fa-github"></i></button>
                            <button className='btn'><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <p className="text-danger fw-bolder">No Projects Uploaded yet!!!</p>
                </div>
            </div>
        </>
    )
}

export default MyProjects