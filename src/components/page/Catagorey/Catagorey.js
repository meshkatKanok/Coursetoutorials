import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import Axios from "axios";
import FileDownload from '../Catagorey/Catagorey'
const Catagorey = () => {
   const cataData=useLoaderData()
   const {title,image_url,details,_id

   }=cataData
   const download=(e)=>{
    e.preventDefault()
    Axios({
      url:"http://localhost:3000/",
      method:"GET",
      responseType:"blob"
    })
    .then(res=>{
      FileDownload(res.data,"downloded.png")
    })
   }
     
    return (
        <div>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
        <Button onClick={(e)=>download(e)} className='w-25 mt-2 mt-lg-0 ' variant="primary">Download pdf</Button>
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