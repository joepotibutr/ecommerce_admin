import React, { Component } from 'react'
import { Grid , Header} from 'semantic-ui-react'
import ProductsTable from '../components/ProductsTable'

class Products extends Component {
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
                        <ProductsTable/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default Products
