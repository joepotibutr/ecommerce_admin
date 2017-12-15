import React, { Component } from 'react'
import { Grid , Header , Modal , Button , Icon} from 'semantic-ui-react'
import ProductsTable from '../components/ProductsTable'
import RenderProducts from '../components/RenderProducts'
import { setVisibleProducts } from '../actions'
import { connect } from 'react-redux'
import CreateProductForm from '../components/CreateProductForm'
import { createProduct , editProduct , deleteProduct } from '../actions'
import SideNav from '../components/SideNav'
import NotificationBar from '../components/NotificationBar'
import { Redirect } from 'react-router-dom'

class Products extends Component {
    
    componentDidMount() {
        this.props.setVisibleProducts()
    }
    del = id => this.props.deleteProduct(id).then(() => this.props.history.push('/products'))
    edit = data => this.props.editProduct(data).then(() => this.props.history.push('/products'))
    submit = data => this.props.createProduct(data).then(() => this.props.history.push('/products'))

    render() {
        if(this.props.isAuthenticated)
        return (
            <div>
            <SideNav/>
            <NotificationBar/>
            <div style={{float:'right',width:'86%',padding:'20px 60px'}}>
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
                                   submit={this.submit}
                                />
                            </Modal.Description>
                        </Modal.Content>
                    </Modal> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProductsTable>
                            <RenderProducts
                                del={this.del}
                                submit={this.edit}
                            />
                        </ProductsTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            </div>
        )
        else return <Redirect to='/' />
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.admin.username
})


export default connect(mapStateToProps,{
    setVisibleProducts,
    createProduct,
    deleteProduct,
    editProduct
})(Products)
