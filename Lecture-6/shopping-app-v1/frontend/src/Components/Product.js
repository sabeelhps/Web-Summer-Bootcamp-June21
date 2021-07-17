import React from 'react'
import {Card,Button} from 'react-bootstrap';


function Product(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Card.Title>{props.price}</Card.Title>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;
