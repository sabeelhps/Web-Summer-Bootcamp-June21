import React, { Component } from 'react'
import {Col,Row} from 'react-bootstrap';
import Product from './Product';
import axios from 'axios';
import './ProductList.css';
import {RiShoppingBasketFill} from 'react-icons/ri'

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
            return (<Col  key={product._id} lg={4} md={6}>
                <Product
                       
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
            <h1 className="heading"><RiShoppingBasketFill/>Shopping-Cart</h1>  
            <Row>
                {products}
            </Row>
            </div>
        )
    }
}

export default ProductList;
