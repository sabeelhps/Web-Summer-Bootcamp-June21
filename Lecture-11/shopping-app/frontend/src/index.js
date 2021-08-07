import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { UserContextProvider } from './store/user-context';

ReactDOM.render(
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  ,
  document.getElementById('root')
);


