import React from 'react'
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Product.css';


function Product(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Card.Title>&#8377;{props.price}</Card.Title>
                <Button variant="primary">
                    <Link to={`/products/${props.id}`}>Buy Now</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Product;
