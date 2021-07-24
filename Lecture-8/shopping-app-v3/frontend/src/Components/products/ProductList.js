import React, { Component } from 'react'
import {Col,Row} from 'react-bootstrap';
import Product from './Product';
import axios from 'axios';
import './ProductList.css'

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
            return (<Col lg={4} md={6}>
                <Product
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        desc={product.desc}
                        img={product.img}
                        id={product._id}
                        
                        />
                </Col>)
        })


        return (
            <div>
            <h1 className="heading">Shopping-Cart</h1>  
            <Row>
                {products}
            </Row>
            </div>
        )
    }
}

export default ProductList;
