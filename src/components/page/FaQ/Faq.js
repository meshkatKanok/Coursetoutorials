import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Frequently Asked Questions</h1>
           <Card className='w-75 m-auto'>
           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> what is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context api works?</Accordion.Header>
        <Accordion.Body>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is useRef in react?</Accordion.Header>
        <Accordion.Body>
        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
           </Card>



        </div>
    );
};

export default Faq;