import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Checkout = () => {
    const checkoutdata=useLoaderData()
    console.log(checkoutdata);
    const {title,details}=checkoutdata
    return (
        <div>
                <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
           {details}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Checkout;