import React, { Component } from 'react'
import { Grid , Segment , Breadcrumb , Header , Table } from 'semantic-ui-react'
import RenderOrdersTable from '../components/RenderOrdersTable'

class Orders extends Component {
    render() {
        return (
            <Grid>
                 <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>ORDERS</Header>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section link>Home</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section link>Registration</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
                        </Breadcrumb>
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
