import React,{useContext} from 'react'
import ProductList from './Components/products/ProductList'
import './App.css'
import { Route, Switch,Redirect} from 'react-router-dom';
import Layout from './Components/layout/Layout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import New from './pages/New';
import Show from './pages/Show';
import Edit from './pages/Edit';
import Cart from './pages/Cart';

import UserContext from './store/user-context';

function App() {
  
    const currentUser = useContext(UserContext);

    const {isLoggedIn} = currentUser;


    return (
      <Layout>
        <Switch>
        
          <Route exact path="/home" component={Home} />
          <Route exact path="/allproducts" component={ProductList} />        
          <Route exact path="/products/:id" component={Show} />
          
          <Route exact path="/new" render={() => {
            return isLoggedIn===true ? <New/> : <Redirect to="/login"/> 
          }} />
          <Route exact path="/products/:id/edit" component={Edit} />    
          <Route exact path="/register" component={SignUp} />   
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />

        </Switch>
      </Layout>
    )
}


export default App;
