import React, { Component } from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            img:'',
            price:'',
            desc:''
        }
    }


    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    formSubmitHandler = async(e)=>{
        e.preventDefault();
        await axios.patch(`/products/${this.props.match.params.id}`,this.state);
        this.props.history.push(`/products/${this.props.match.params.id}`);
    }


    async componentDidMount(){
        let product = await axios.get(`/products/${this.props.match.params.id}/edit`);
        product=product.data;
        this.setState({name:product.name,img:product.img,price:product.price,desc:product.desc});
    }

    render() {
        return (
            <div>

                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h1>Edit Product</h1>
                        <Form onSubmit={this.formSubmitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name" name="name" value={this.state.name} onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Img Url</Form.Label>
                                <Form.Control type="text" placeholder="Img Url" name="img" value={this.state.img} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control as="textarea" rows={3}  name="desc" value={this.state.desc} onChange={this.changeHandler}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>

                
            </div>
        )
    }
}
