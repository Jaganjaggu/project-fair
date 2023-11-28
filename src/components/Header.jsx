import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TockenAuth'

function Header({ isDashboard }) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)

  const navigate = useNavigate()
  const handleLogout = () =>{
    
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')

  }
  return (
    <>
      <Navbar style={{ backgroundColor: '#90ee90' }} className="postion-fixed top-0 w-100">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
              <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fai{' '}</Link>
          </Navbar.Brand>

          {/* <button className='btn btn-light'>Logout</button> */}
          {isDashboard &&
            <button onClick={handleLogout} className="btn btn-linkms-auto text-info fw-bolder fs-5">Logout <i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></button>
          
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header