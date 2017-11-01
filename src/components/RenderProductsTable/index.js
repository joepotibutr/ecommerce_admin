import React , {Component} from 'react'
import { Table , Segment , Button , Icon , Modal } from 'semantic-ui-react'
import ProductForm from '../ProductForm'


class RenderProductsTable extends Component {
    render(){

      

        // const renderButton = (
        //     )


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
                <Table.Body >
                <Table.Row>
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
                            <ProductForm
                                btn={'Save'}
                            />
                        </Modal.Description>
                    </Modal.Content>
                    </Modal>
                    </Table.Cell>

                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign={'center'}>103887</Table.Cell>
                    <Table.Cell>Black Denim Jackets</Table.Cell>
                    <Table.Cell>Jackets</Table.Cell>
                    <Table.Cell>500</Table.Cell>
                    <Table.Cell textAlign={'center'} >5</Table.Cell>
                    <Table.Cell textAlign={'center'} ><Icon name={'ellipsis horizontal'}/></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign={'center'}>103887</Table.Cell>
                    <Table.Cell>Brown Sweatshirts</Table.Cell>
                    <Table.Cell>Sweatshirts</Table.Cell>
                    <Table.Cell>500</Table.Cell>
                    <Table.Cell textAlign={'center'} >4</Table.Cell>
                    <Table.Cell textAlign={'center'} ><Icon name={'ellipsis horizontal'}/></Table.Cell>
                </Table.Row>
                </Table.Body>
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
                                <ProductForm
                                    btn={'Add'}
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
}

export default RenderProductsTable