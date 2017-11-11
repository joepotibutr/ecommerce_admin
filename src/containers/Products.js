import React, { Component } from 'react'
import { Grid , Header , Modal , Button , Icon} from 'semantic-ui-react'
import ProductsTable from '../components/ProductsTable'
import RenderProducts from '../components/RenderProducts'
import { setVisibleProducts } from '../actions'
import { connect } from 'react-redux'
import CreateProductForm from '../components/CreateProductForm'

class Products extends Component {
    
    componentDidMount() {
        this.props.setVisibleProducts()
    }
    
    render() {
        return (
            <Grid>
                 <Grid.Row columns={2}>
                    <Grid.Column verticalAlign={'bottom'}>
                        <Header as={'h4'}>EDIT / SHOW PRODUCTS</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Modal 
                    size={'mini'}
                    trigger={<Button floated='right' color={'black'} icon  labelPosition='left' size='medium'>
                            <Icon name='add'/> Add New
                         </Button>}>
                        <Modal.Header content={'New Product'}/>
                        <Modal.Content>
                            <Modal.Description>
                                <CreateProductForm
                                   
                                />
                            </Modal.Description>
                        </Modal.Content>
                    </Modal> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProductsTable>
                            <RenderProducts/>
                        </ProductsTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default connect(null,{setVisibleProducts})(Products)
