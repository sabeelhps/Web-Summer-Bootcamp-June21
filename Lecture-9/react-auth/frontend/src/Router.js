import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';

function Router() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/register">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <Switch>

                <Route exact path="/" component={ Products}/>
                <Route exact path="/register" component={ SignUp}/>
                <Route exact path="/login" component={ Login}/>

            </Switch>

            
        </div>
    )
}

export default Router;
