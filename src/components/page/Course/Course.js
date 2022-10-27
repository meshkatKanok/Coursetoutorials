import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NewCart from '../../NewCart/NewCart';
import ListGroup from 'react-bootstrap/ListGroup';
import './Course.css';
import { useContext } from 'react';
import { AuthContex } from '../../Authprovider/Authprovider';
import { Card } from 'react-bootstrap';

const Course = () => {
    const allData=useLoaderData()
    const {isLight}=useContext(AuthContex)
    return (
     
         
       <Card bg={isLight?"light":'dark'} style={{border:'none',borderRadius:'0px'}}>
         <div className='row'>
             <div className='col-lg-2'>
        {
            allData.map((newdata,index)=>
                <ListGroup>

                <Link key={index}  className='text-center mt-3 btn btn-primary' style={{textDecoration:'none'}} to={`/newdata/${newdata.category_id}`}><ListGroup.Item>{newdata.title}</ListGroup.Item></Link>
              </ListGroup>
            
            )
        }
        </div>
             <div className='course p-4 col-sm-12 col-lg-10'>
            {
            allData.map((data,index)=><div>
                <NewCart  key={index}
            data={data}></NewCart>
            </div>)
           }

        
        </div>
        </div>
       </Card>

      
    );
};

export default Course;