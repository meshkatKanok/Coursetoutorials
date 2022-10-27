import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../imgae/javascript.png'
import Brand2 from '../imgae/java.png'
import Brand3 from '../imgae/csharp.png'
import { useContext } from 'react';
import { AuthContex } from '../Authprovider/Authprovider';


const Corusel = () => {
  const {isLight}=useContext(AuthContex)
  
    return (
        <div>
            <Carousel bg={isLight?"light":'dark'}>
          <Carousel.Item>
            <img style={{height:'400px'}}
              className="d-block w-100"
              src={Brand1}
              alt="First slide"
            />
             <Carousel.Caption>
          <h3>JavaScript Courses</h3>
          <p>JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced</p>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'400px'}}
              className="d-block w-100"
              src={Brand2}
              alt="Second slide"
            />
             <Carousel.Caption>
             <h3 style={{color:'black'}}>Java Courses</h3>
          <p style={{color:'black '}}>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possibled</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'400px'}}
              className="d-block w-100"
              src={Brand3}
              alt="third slide"
            />
            <Carousel.Caption>
             <h3>C# Courses</h3>
          <p >C# is a general-purpose, high-level multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines</p>
          </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
            
        </div>
    );
};

export default Corusel;