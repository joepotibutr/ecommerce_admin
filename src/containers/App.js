import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Overview from './Overview'
import LoginAdmin from './LoginAdmin'
import Products from './Products'
import ManageUsers from './ManageUsers'
import Orders from './Orders'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SideNav/>
          <div style={{float:'right',width:'84%',padding:'40px'}}>
          <Route exact path="/" component={LoginAdmin} />
          <Route path="/Overview" component={Overview} />
          <Route path="/products" component={Products} />
          <Route path="/orders" component={Orders} />
          <Route path="/manage-users" component={ManageUsers} />
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
