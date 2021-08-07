import React from 'react';
import { Card,Button,Row,Col } from 'react-bootstrap';

function CartItem(props){
    return (
        <Card style={{margin:'10px'}}>
            <Row>
                <Col lg={4}><Card.Img style={{width:'150px',height:'90%'}} variant="left" src={props.img} /></Col>
                <Col lg={8}>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Title>&#8377;{props.price}</Card.Title>
                        <Button onClick={()=>props.removeItem(props.id)} variant="danger">Remove</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;
