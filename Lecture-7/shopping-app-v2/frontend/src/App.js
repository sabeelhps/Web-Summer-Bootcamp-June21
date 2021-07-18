import React, { Component } from 'react'
import Header from './Components/Header';
import ProductList from './Components/ProductList'
import {Container} from 'react-bootstrap';
import './App.css'
import {Route,Switch} from 'react-router-dom';
import New from './Components/New';
import Show from './Components/Show';
import Edit from './Components/Edit';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Container className="main-container">
            <Switch>
              <Route exact path="/products" component={ProductList}/>
              <Route exact path="/products/new" component={New} />
              <Route exact path="/products/:id" component={Show} />
              <Route exact path="/products/:id/edit" component={Edit} />
            </Switch>
          </Container>
      </div>
    )
  }
}

export default App;
