import React, { Component } from 'react'
import { Grid , Header  } from 'semantic-ui-react'
import RenderOrdersTable from '../components/RenderOrdersTable'

class Orders extends Component {
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
                        <RenderOrdersTable/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Orders
