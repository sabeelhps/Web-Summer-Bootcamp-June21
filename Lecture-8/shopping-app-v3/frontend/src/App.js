import React, { Component } from 'react'
import ProductList from './Components/products/ProductList'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Home from './Components/pages/Home';



import New from './Components/pages/New';
import Show from './Components/pages/Show';
import Edit from './Components/pages/Edit';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={ProductList}/>
              <Route exact path="/products/new" component={New} />
              <Route exact path="/products/:id" component={Show} />
              <Route exact path="/products/:id/edit" component={Edit} />
            </Switch>
      </Layout>
    )
  }
}

export default App;
