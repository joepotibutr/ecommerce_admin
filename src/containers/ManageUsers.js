import React, { Component } from 'react'
import { Grid , Header } from 'semantic-ui-react'
import UsersTable from '../components/UsersTable'
import RenderUsers from '../components/RenderUsers'
import { connect } from 'react-redux'
import { getVisibleUsers } from '../reducers/users'

class ManageUsers extends Component {
    render() {
        const { users } = this.props
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as={'h4'}>MANAGE USERS</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <UsersTable>
                            <RenderUsers users={users}/>
                        </UsersTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    users : getVisibleUsers(state.users)
})


export default connect(mapStateToProps)(ManageUsers)
