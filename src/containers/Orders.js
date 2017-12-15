import React, { Component } from 'react'
import { Grid , Header  } from 'semantic-ui-react'
import OrdersTable from '../components/OrdersTable'
import RenderOrders from '../components/RenderOrders'
import { connect } from 'react-redux'
import { setVisibleOrders } from '../actions'
import SideNav from '../components/SideNav'
import NotificationBar from '../components/NotificationBar'
import { Redirect } from 'react-router-dom'

class Orders extends Component {
    componentDidMount(){
        this.props.setVisibleOrders()
    }
    render() {
        if(this.props.isAuthenticated)
        return (
            <div>
            <SideNav/>
            <NotificationBar/>
            <div style={{float:'right',width:'86%',padding:'20px 60px'}}>
            <Grid>
                 <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>ORDERS</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <OrdersTable>
                            <RenderOrders/>
                        </OrdersTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            </div>
        )
        else return <Redirect to='/' />
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.admin
})

export default connect(mapStateToProps,{setVisibleOrders})(Orders)
