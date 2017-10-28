import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Main from './Main'
import LoginAdmin from './LoginAdmin'
import Products from './Products'
import ManageUsers from './ManageUsers'
import Orders from './Orders'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={LoginAdmin} />
        <Route path="/main" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/manage-users" component={ManageUsers} />
      </div>
      </Router>
    )
  }
}

export default App;
