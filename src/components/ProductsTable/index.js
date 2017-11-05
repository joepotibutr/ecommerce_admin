import React from 'react'
import { Table , Segment , Button , Icon , Modal } from 'semantic-ui-react'
import CreateProductForm from '../CreateProductForm'


const ProductsTable = ({ children }) => {
   
    return (
        <Segment>
            <Table singleLine basic={'very'} style={{padding:'20px 20px 0 20px'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={'2'} textAlign={'center'}>Product ID</Table.HeaderCell>
                        <Table.HeaderCell width={'4'}>Product Name</Table.HeaderCell>
                        <Table.HeaderCell width={'3'}>Category</Table.HeaderCell>
                        <Table.HeaderCell width={'2'}>Price</Table.HeaderCell>
                        <Table.HeaderCell width={'2'} textAlign={'center'} >Quantity Unit</Table.HeaderCell>
                        <Table.HeaderCell width={'3'} textAlign={'center'}>Edit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    {children}
                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                    <Modal 
                    size={'mini'}
                    trigger={<Button floated='right' icon labelPosition='left' size='small'>
                            <Icon name='add'/> New Product
                         </Button>}>
                        <Modal.Header content={'New Product'}/>
                        <Modal.Content>
                            <Modal.Description>
                                <CreateProductForm
                                   
                                />
                            </Modal.Description>
                        </Modal.Content>
                    </Modal> 
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </Segment>
        )
    
}

export default ProductsTable