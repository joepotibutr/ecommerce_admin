import React from 'react'
import { Table , Icon , Modal , Confirm } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../../reducers/products'
import EditProductForm from '../EditProductForm'

class RenderProducts extends React.Component{
    state = { open: false }
    
      show = () => this.setState({ open: true })
   
      handleCancel = () => this.setState({ open: false })

     render(){
       const { products , submit , del } = this.props  
     const mapProducts = products.map((product,index) => 
    <Table.Row key={index}>
        <Table.Cell textAlign={'center'}>{product.id}</Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
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
                    submit={submit}
                    product={product}
                />
            </Modal.Description>
        </Modal.Content>
        </Modal>
        </Table.Cell>
        <Table.Cell textAlign={'center'}>
            <Icon 
                style={{cursor:'pointer'}}
                onClick={this.show}
                name='delete'
            />
             <Confirm
                header='Delete Product'
                open={this.state.open}
                content='Are you sure ?'
                onCancel={this.handleCancel}
                onConfirm={() => { 
                    this.setState({ open : false })
                    return del({id : product.id })
                }}
        />
        </Table.Cell>
    </Table.Row>
)

    return (
        <Table.Body>
            {mapProducts}
        </Table.Body>
        )
    }
}

const mapStateToProps = state => ({
    products : getVisibleProducts(state.products)
})


export default connect(mapStateToProps)(RenderProducts)