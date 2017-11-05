import React from 'react'
import { Table , Icon , Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../../reducers/products'
import EditProductForm from '../EditProductForm'

const RenderProducts = ({ products }) => {
     const mapProducts = products.map((products,index) => 
    <Table.Row key={index}>
        <Table.Cell textAlign={'center'}>103887</Table.Cell>
        <Table.Cell>White Printed Floral Shirts</Table.Cell>
        <Table.Cell>T-Shirts</Table.Cell>
        <Table.Cell>500</Table.Cell>
        <Table.Cell textAlign={'center'} >2</Table.Cell>
        <Table.Cell textAlign={'center'} >
        <Modal 
        size={'mini'} 
        trigger={
            <Icon name={'ellipsis horizontal'}/>
            }>
        <Modal.Header content={'Edit Product'}/>
        <Modal.Content>
            <Modal.Description>
                <EditProductForm
                    
                />
            </Modal.Description>
        </Modal.Content>
        </Modal>
        </Table.Cell>
    </Table.Row>
)

    return (
        <Table.Body>
            {mapProducts}
        </Table.Body>
    )
}

const mapStateToProps = state => ({
    products : getVisibleProducts(state.products)
})


export default connect(mapStateToProps)(RenderProducts)