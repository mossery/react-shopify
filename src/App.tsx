import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import { Navbar } from './components'
import { HomePage, Collection, ProductDetail } from './pages'

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{ paddingTop: '55px'}}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/collections/:handle/products/:product">
            <ProductDetail />
          </Route>
          <Route exact path="/collections/:handle">
            <Collection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
