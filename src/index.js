import React  from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactGa from 'react-ga';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactGa.initialize('G-NM1YCL5XHW');
ReactDOM.render(
  <React.StrictMode>
  <Router>
      <Switch>
        <Route exact path = '/'>
          <App />
          </Route>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

