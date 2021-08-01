import React from 'react'
import {Card,Button} from 'react-bootstrap';
import './Product.css';
import { LinkContainer } from 'react-router-bootstrap';


function Product(props) {
    return (
        <Card className="mb-3 text-center" style={{ maxWidth: '21rem',margin:'10px auto' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Card.Title>&#8377;{props.price}</Card.Title>

                <LinkContainer to={`/products/${props.id}`}>
                    <Button variant="outline-primary">
                        Buy Now
                    </Button>
                </LinkContainer>   
            </Card.Body>
        </Card>
    )
}

export default Product;
