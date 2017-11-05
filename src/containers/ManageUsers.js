import React, { Component } from 'react'
import { Grid , Header } from 'semantic-ui-react'
import UsersTable from '../components/UsersTable'
import RenderUsers from '../components/RenderUsers'
import { connect } from 'react-redux'
import { setVisibleUsers } from '../actions'

class ManageUsers extends Component {
    componentWillMount(){
        this.props.setVisibleUsers()
    }
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
                        <UsersTable>
                            <RenderUsers/>
                        </UsersTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


export default connect(null,{setVisibleUsers})(ManageUsers)
