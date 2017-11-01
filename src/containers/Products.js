import React, { Component } from 'react'
import { Grid , Header} from 'semantic-ui-react'
import RenderProductsTable from '../components/RenderProductsTable'

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
                        <RenderProductsTable/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default Products
