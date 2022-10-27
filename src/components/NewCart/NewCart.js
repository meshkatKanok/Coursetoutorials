import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const NewCart = ({data}) => {
    const {_id,title,image_url,details
    }=data
    return (
      <div>
       
          <CardGroup>
          <Card style={{height:'25rem'}}>
            <Card.Img variant="top" src={image_url} style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
    
                          {details.length>200?<>{details.slice(0,100)+'...'}
                          <Link>Read more</Link></>:<p>{details}</p>
                    }
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
         <Button  className='w-100 text-white' variant="dark">
       <Link to={`/data/${_id}`} style={{textDecoration:'none',color:'white'}}>Details</Link>
      </Button>
      
            </Card.Footer>
          </Card>
        </CardGroup>

      </div>
      );
};

export default NewCart;