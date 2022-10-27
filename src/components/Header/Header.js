import React, { useContext } from 'react';
import {Image } from 'react-bootstrap';
import { FaUser,} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../image/devlopmentlogo-removebg-preview.png'
import { AuthContex } from '../Authprovider/Authprovider';
import {BsSunFill} from "react-icons/bs";

const Header = () => {
  const {user,logout,isLight,setLight}=useContext(AuthContex)
  console.log(user)
  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const themeChange=()=>{
setLight(!isLight)
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark"  bg='dark' style={{width:'100%'}}
            >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Link to='/home'>
        <Navbar.Brand>
            <img style={{height:'60px'}} src={logo} alt="" />
        </Navbar.Brand>

        </Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" variant='light'>
            <Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} to="/home" >Home</Link>
            <Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} to="/courses" >Courses</Link>
            <Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} to="/faq">FAQ</Link>
            <Link className='text-sm-center' style={{textDecoration:'none',color:'white',marginRight:'20px'}} to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            <>
              {
                
                  user?.uid ?
                  <>
                  <Link className='text-white me-3 mt-3' style={{textDecoration:'none',color:'white',marginRight:'20px'}}> {user?.displayName}</Link>
                  <div variant='dark' className='mt-3' onClick={handleLogout}><Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} >Logout</Link></div>
                  </>
                  : <>
                            <Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} to="/login">Login</Link>
                            <Link style={{textDecoration:'none',color:'white',marginRight:'20px'}} to="/register">Register</Link>
                  </>
                
              }
               <Link  to='/profile'>
              {user?.photoURL?
              <Image className='me-3' style={{height:'50px'}}  roundedCircle src={user?.photoURL}>

              </Image>: 
               <FaUser className='text-white mx-3'/> 
}
            </Link>
              </>
          </Nav>
          < BsSunFill onClick={themeChange} className='text-white'/>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
         
            
        </div>
    );
};

export default Header;