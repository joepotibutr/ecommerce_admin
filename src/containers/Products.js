import React, { Component } from 'react'
import { Grid , Segment , Breadcrumb , Header , Table } from 'semantic-ui-react'
import RenderProductsTable from '../components/RenderProductsTable'

class Products extends Component {
    render() {
        return (
            <Grid>
                 <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>EDIT / SHOW PRODUCTS</Header>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section link>Admin</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section link>Products</Breadcrumb.Section>
                        </Breadcrumb>
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
