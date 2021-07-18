import React, { Component } from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Show.css';


class Show extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            img:'',
            price:'',
            desc:''
        }
    }

    async componentDidMount(){
        let product = await axios.get(`/products/${this.props.match.params.id}`);
        product = product.data;
        this.setState({name:product.name,img:product.img,price:product.price,desc:product.desc});
    }

    deleteProductHandler = async()=>{

        await axios.delete(`/products/${this.props.match.params.id}`);
        this.props.history.push('/products');

    }


    render() {
        return (
            <Row>
                <Col lg={6} md={12}>
                    <Card style={{ width: '21rem'}}>
                        <Card.Img variant="top" src={this.state.img} />
                        <Card.Body>
                            <Card.Title>{this.state.name}</Card.Title>
                            <Card.Text>
                                {this.state.desc}
                            </Card.Text>
                            <Card.Title>&#8377;{this.state.price}</Card.Title>
                            <Button className="mb-2 me-2" variant="primary">
                                <Link to={`/products/`}>Buy Now</Link>
                            </Button>
                             <Button className="mb-2 me-2" variant="success">
                                <Link to={`/products/`}>Add To Cart</Link>
                            </Button>
                            <Button  className="mb-2 me-2" variant="info">
                                <Link to={`/products/${this.props.match.params.id}/edit`}>Edit</Link>
                            </Button>
                            <Button onClick={this.deleteProductHandler}  className="mb-2 me-2" variant="danger">
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={12}>
                    <h1>Leave a Review</h1>
                </Col>
            </Row>
        )
    }
}

export default Show;
