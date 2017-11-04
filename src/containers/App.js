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
// import Footer from '../components/Footer'
import NotificationBar from '../components/NotificationBar'
import { connect } from 'react-redux'
import { setVisibleUsers } from '../actions'


class App extends Component {
    componentDidMount(){
      this.props.setVisibleUsers()
    }

    render() {
      return (
        <Router>
          <div>
            <SideNav/>
            <NotificationBar/>
            <div style={{float:'right',width:'86%',padding:'30px 60px'}}>
            <Route exact path="/" component={LoginAdmin} />
            <Route path="/Overview" component={Overview} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/manage-users" component={ManageUsers} />
            </div>
            {/* <Footer/> */}
          </div>
        </Router>
      )
    }
}



export default connect(null,{setVisibleUsers})(App);
