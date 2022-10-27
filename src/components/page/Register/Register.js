import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { AuthContex } from '../../Authprovider/Authprovider';

 

const Register = () => {
    const {createUser, updateUserProfile,verifyEmail}=useContext(AuthContex)
    const [error,setError]=useState('')
    const [accepted,setAccpeted]=useState(false)
    const hanSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,password,email)
        createUser(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            setError('')
            form.reset()
            handleUpdateUserProfile(name,photoURL)
            handleEmailVerification()
            
        })
        .catch(error=>setError(error.message))
    }
    const handleterm=e=>{
      setAccpeted(e.target.checked)

    }
    const handleEmailVerification=()=>{
      verifyEmail()
      .then(()=>{})
      .catch(e=>console.error(e))
    }

    const handleUpdateUserProfile=(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.log(error))
    }
    return (
        <div>
          
          <Card className="mt-5 m-auto p-3 w-50">
          <Card.Title className='text-center text-primary fs-1'>Register Now</Card.Title>
      <Card.Body >
      <Form onSubmit={hanSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' required type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photoURL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Text className="text-danger">
           <p> {error}</p>
          </Form.Text>
          <Form.Group clasName='mb-3 mt-3' controlId="formBasicCheckbox">
            <Form.Check 
            type="checkbox"
            onClick={handleterm}
             label={<>
             Accept 
             <Link to='/terms'>Terms and condition</Link>
             </>}/>
          </Form.Group>
        <Button className='mt-3' variant="primary" type="submit" disabled={!accepted}>
        Register
        </Button>
      </Form>     
         
      </Card.Body>
    </Card>
          

           
        </div>
    );
};

export default Register;