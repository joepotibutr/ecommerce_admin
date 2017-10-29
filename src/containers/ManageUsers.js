import React, { Component } from 'react'
import { Grid , Header , Breadcrumb } from 'semantic-ui-react'
import RenderUsersTable from '../components/RenderUsersTable'

class ManageUsers extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>MANAGE USERS</Header>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section link>Admin</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section link>Manage Users</Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <RenderUsersTable/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default ManageUsers
