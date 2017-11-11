import React from 'react'
import { Table , Icon , Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleOrders } from '../../reducers/orders'
import OrderDetail from '../OrderDetail'

const RenderOrders = ({ orders }) => {
    const mapOrders = orders.map((order,index) => 
        <Table.Row key={index}>
        <Table.Cell textAlign={'center'}>{order.id}</Table.Cell>
        <Table.Cell>{order.cusName}</Table.Cell>
        <Table.Cell>{order.email}</Table.Cell>
        <Table.Cell>{order.orderDate}</Table.Cell>
        <Table.Cell textAlign={'center'}>{order.orderTotal}</Table.Cell>
        <Table.Cell textAlign={'center'} >

        <Modal size={'tiny'} trigger={<Icon name={'ellipsis horizontal'}/>}>
            <Modal.Header>Order Detail</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <OrderDetail/>
                </Modal.Description>
            </Modal.Content>
        </Modal>

        </Table.Cell>
    </Table.Row>)

    return (
        <Table.Body >
            {mapOrders}
        </Table.Body>
    )
}

const mapStateToProps = state => ({
    orders : getVisibleOrders(state.orders)
})


export default connect(mapStateToProps)(RenderOrders)