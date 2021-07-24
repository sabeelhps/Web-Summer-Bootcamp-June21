import React, { Component } from 'react'
import {Row,Col,Card,Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Show.css';
import ProductReviews from '../products/ProductReviews';


class Show extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            img:'',
            price:'',
            desc: '',
            rating: 1,
            comment: '',
            reviews:[]
        }
    }

    async componentDidMount(){
        let product = await axios.get(`/products/${this.props.match.params.id}`);
        product = product.data;
        this.setState({name:product.name,img:product.img,price:product.price,desc:product.desc,reviews:product.reviews});
    }

    deleteProductHandler = async()=>{

        await axios.delete(`/products/${this.props.match.params.id}`);
        this.props.history.push('/products');

    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    formSubmitHandler = async(event) => {
        event.preventDefault();

        await axios.post(`/products/${this.props.match.params.id}/review`, { rating: this.state.rating, comment: this.state.comment });
        let product = await axios.get(`/products/${this.props.match.params.id}`);
        product = product.data;
        
        this.setState({ reviews:product.reviews,rating: 1, comment: '' });
    }


    render() {

        let reviews = <p>This product has no reviews yet</p>;

        if (this.state.reviews.length) {
            reviews = this.state.reviews.map((review) => {
                return <ProductReviews
                    rating={review.rating}
                    comment={review.comment}
                    key={review._id}
                />
            })
        }

        return (
            <Row>
                <Col className="show-card" lg={6} md={12}>
                    <Card style={{ width: '23rem',margin:'5px auto'}}>
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
                <Col className="mt-3" lg={4} md={12}>
                    <h1>Leave a Review</h1>
                    <Form onSubmit={this.formSubmitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <br/>
                            <Form.Control type="range"  name="rating" min="1" max="5" value={this.state.rating} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="comment" value={this.state.comment} onChange={this.changeHandler}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                        
                    <div className="m-3 mt-3 mb-3">
                        {reviews}
                    </div>
                    
                </Col>
            </Row>
        )
    }
}

export default Show;
