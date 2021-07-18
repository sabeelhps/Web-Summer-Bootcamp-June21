import React, { Component } from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';

class New extends Component {

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
        // console.log(e.target.name);
        this.setState({[e.target.name]:e.target.value});
    }

    formSubmitHandler = async(e)=>{
        e.preventDefault();
        await axios.post('/products',this.state);
        console.log("New Product Created");
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                    <Form onSubmit={this.formSubmitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" name="name" onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Img Url</Form.Label>
                            <Form.Control type="text" placeholder="Img Url" name="img" onChange={this.changeHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Price" name="price" onChange={this.changeHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="desc" onChange={this.changeHandler}/>
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

export default New;
