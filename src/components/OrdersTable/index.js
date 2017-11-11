import React from 'react'
import { Table , Segment } from 'semantic-ui-react'

const OrdersTable = ({ children }) => {
    return (
        <Segment>
        <Table singleLine basic={'very'} style={{padding:'20px 20px 0 20px'}}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={'2'} textAlign={'center'}>Order ID</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Customer Name</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Email</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Order Date</Table.HeaderCell>
                    <Table.HeaderCell width={'2'} textAlign={'center'}>Amount</Table.HeaderCell>
                    <Table.HeaderCell width={'3'} textAlign={'center'}>Order Detail</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

                {children}
                
            <Table.Footer fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='6'/>
            </Table.Row>
            </Table.Footer>
        </Table>
        </Segment>
    )
}

export default OrdersTable