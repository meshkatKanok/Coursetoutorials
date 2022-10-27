import React from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContex } from '../../Authprovider/Authprovider';

const Blog = () => {
    const {isLight}=useContext(AuthContex)
    return (
        <Card bg={isLight?"light":'dark'} style={{border:'none',borderRadius:'0px'}}>
         
          <Card className='mt-2 p-3'>
      <h3>What is cors?</h3>
      <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes</p>
          </Card>
          
          
        
          
          <Card className='mt-4 p-4'>
            <h3>Why are you using firebase?</h3>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            </Card>
        
          <Card className='mt-4 p-4'>
            <h3>What other options do you have to implement aunthentication?</h3>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </Card>
         
          <Card>
            
            </Card>
        
          <Card className='mt-4 p-4'>
            <h3>what does the private route work?</h3>
            <p>The private route component is used to protect selected pages in a React app from unauthenticated users</p>
            </Card>
           
          <Card className='mt-4 p-4'>
            <h3>what is node?How does node work?</h3>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </Card>
        
      </Card>
    );
};

export default Blog;