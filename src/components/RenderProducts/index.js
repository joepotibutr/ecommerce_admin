import React from 'react'
import { Table , Icon , Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../../reducers/products'
import EditProductForm from '../EditProductForm'

const RenderProducts = ({ products }) => {
     const mapProducts = products.map((product,index) => 
    <Table.Row key={index}>
        <Table.Cell textAlign={'center'}>{product.id}</Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell textAlign={'center'} >2</Table.Cell>
        <Table.Cell textAlign={'center'} >
        <Modal 
        size={'mini'} 
        trigger={
            <Icon name={'edit'}/>
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