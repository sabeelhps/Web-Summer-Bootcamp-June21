import React, { Component } from 'react'
import Header from './Components/Header';
import ProductList from './Components/ProductList'
import {Container} from 'react-bootstrap';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Container className="main-container">
              <ProductList/>
          </Container>
      </div>
    )
  }
}

export default App;
