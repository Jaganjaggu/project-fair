import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserAPI } from '../Services/allAPI';

function Profile() {
    const [open, setOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        username: "", email: '', password: '', profile: '', github: '', linkedin: ''
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, profile: "", github: user.github, linkedin: user.linkedin })
        setExistingImage(user.profile)

    }, [open])

    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }
    }, [userProfile.profile])

    const handleProfileUpdate = async () => {
        const {username,email,password,profile,github,linkedin} = userProfile
        if(!github || !linkedin){
            toast.info("Please fill the form completely")
        }else{
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ? reqBody.append("profileImage", profile) : reqBody.append("profileImage", existingImage)
            const token = sessionStorage.getItem("token")
            
            if(preview){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const res = await editUserAPI(reqBody,reqHeader)
                if(res.status === 200){
                    setOpen(!open)
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                }else{
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                }
            }else{
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        }
    }
    return (
        <>
            <div className='card shadow p-5'>
                <div className='d-flex justify-content-between'>
                    <h2>My Profile</h2>
                    <button onClick={() => setOpen(!open)} className='btn btn-outline-info d-flex align-items-center' style={{ border: 'none', outline: 'none' }}><i class="fa-solid fa-angle-down"></i></button>
                </div>
                <Collapse in={open}>
                    <div className='row justify-content-center mt-3'>
                        {/* `${BASE_URL}/uploads/${existingImage}` */}
                        {/* Upload Picture */}
                        <label className='text-center'>
                            <input type="file" style={{ display: 'none' }} onChange={(e) => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                            {existingImage !== "" ?
                                <img width={'200px'} src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="Upload picture" /> :
                                <img width={'200px'} src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="Upload picture" />

                            }
                            {console.log(existingImage)}
                        </label>
                        <div className="mt-3">
                            <input type="text" value={userProfile.github} onChange={e => setUserProfile(({ ...userProfile, github: e.target.value }))} className='form-control' placeholder='Github' />
                        </div>
                        <div className="mt-3">
                            <input type="text" value={userProfile.linkedin} onChange={e => setUserProfile(({ ...userProfile, linkedin: e.target.value }))} className='form-control' placeholder='Linkedin' />
                        </div>
                        <div className='mt-3 text-center'>
                            <button onClick={handleProfileUpdate} className='btn btn-warning '>Update</button>
                        </div>
                    </div>
                </Collapse>
            </div>
            <ToastContainer position="top-right" autoClose={2000} draggable
                pauseOnHover
                theme="colored" />
        </>
    )
}

export default Profile