import React, { Component } from 'react'
import { Grid , Header } from 'semantic-ui-react'
import RenderUsersTable from '../components/RenderUsersTable'

class ManageUsers extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>MANAGE USERS</Header>
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
