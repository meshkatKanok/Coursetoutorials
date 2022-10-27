import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Authprovider/Authprovider';
 

const Login = () => {
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const {signin,setLoading}=useContext(AuthContex)
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleSign=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value;
        const password=form.password.value;
        console.log(password,email)
        signin(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            form.reset()
            setError('')
            if(user.emailVerified){
              navigate(from,{replace:true})
            }
          
        })
        .catch(error=> setError(error.message))
        .finally(()=>{
          setLoading(false)
        })
       

    }
    return (

       
 
    <div className="row">
    <Card className='mt-5 m-auto p-3 w-75'>
<Card.Title className='text-center text-primary' style={{fontSize:'50px'}}>Log In Now</Card.Title>
      <Card.Body> 
     
      <Form onSubmit={handleSign}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
        <Form.Text className="text-danger">
           <p> {error}</p>
          </Form.Text>
        <Button variant="primary" type="submit">
        Login
        </Button>
      </Form>
         
      </Card.Body>
    </Card>
    </div>
 
          
     
    );
};

export default Login;