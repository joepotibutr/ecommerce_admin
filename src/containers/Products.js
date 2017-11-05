import React, { Component } from 'react'
import { Grid , Header} from 'semantic-ui-react'
import ProductsTable from '../components/ProductsTable'
import RenderProducts from '../components/RenderProducts'
import { setVisibleProducts } from '../actions'
import { connect } from 'react-redux'

class Products extends Component {
    
    componentDidMount() {
        this.props.setVisibleProducts()
    }
    
    render() {
        return (
            <Grid>
                 <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>EDIT / SHOW PRODUCTS</Header>
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
