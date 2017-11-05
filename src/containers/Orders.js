import React, { Component } from 'react'
import { Grid , Header  } from 'semantic-ui-react'
import OrdersTable from '../components/OrdersTable'
import RenderOrders from '../components/RenderOrders'
import { connect } from 'react-redux'
import { setVisibleOrders } from '../actions'

class Orders extends Component {
    componentDidMount(){
        this.props.setVisibleOrders()
    }
    render() {
        return (
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
        )
    }
}

export default connect(null,{setVisibleOrders})(Orders)
