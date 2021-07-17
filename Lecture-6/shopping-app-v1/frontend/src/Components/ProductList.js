import React, { Component } from 'react'
import {Col,Row} from 'react-bootstrap';
import Product from './Product';
import axios from 'axios';

class ProductList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }

    async componentDidMount(){
        const products = await axios.get('/products');
        this.setState({products:products.data});
    }   
    
    
    render() {


        const products = this.state.products.map((product)=>{
            return (<Col lg={3} md={6}>
                    <Product 
                        name={product.name}
                        price={product.price}
                        desc={product.desc}
                        img={product.img}
                        />
                </Col>)
        })


        return (
            <Row>
                {products}
            </Row>
        )
    }
}

export default ProductList;
