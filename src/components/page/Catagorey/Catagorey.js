import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import ReactToPdf from "react-to-pdf"
 
const Catagorey = () => {
   const cataData=useLoaderData()
   const {title,image_url,details,_id

   }=cataData
   const ref = React.createRef(); 
    return (
        <div>
            <CardGroup ref={ref}>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
        <ReactToPdf x={20} y={0.5}>

    {({toPdf, targetRef}) =>  (
        <Button className='w-25 mt-2 mt-lg-0' variant="primary" onClick={toPdf} ref={targetRef}>Download pdf</Button>
    )}
</ReactToPdf>
        
        <Button className='w-50 mt-2 mt-lg-0' variant="primary">
        <Link className='text-white' to={`/checkou/${_id}`} style={{textDecoration:'none'}}>CheckOut</Link>
          </Button>
        </Card.Footer>
      </Card>
      
       
    </CardGroup>
            
        </div>
    );
};

export default Catagorey;