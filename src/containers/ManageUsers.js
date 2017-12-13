import React, { Component } from 'react'
import { Grid , Header , Button , Icon , Modal } from 'semantic-ui-react'
import UsersTable from '../components/UsersTable'
import RenderUsers from '../components/RenderUsers'
import { connect } from 'react-redux'
import { setVisibleUsers } from '../actions'
import UserDetail from '../components/UserDetail'

class ManageUsers extends Component {
    componentWillMount(){
        this.props.setVisibleUsers()
    }
    render() {
        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column verticalAlign={'bottom'}>
                        <Header as={'h4'}>MANAGE USERS</Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Modal 
                    size={'mini'}
                    trigger={<Button floated='right' color={'black'} icon  labelPosition='left' size='medium'>
                            <Icon name='user'/> New User
                         </Button>}>
                        <Modal.Header content={'New User'}/>
                        <Modal.Content>
                            <Modal.Description>
                               <UserDetail />
                            </Modal.Description>
                        </Modal.Content>
                    </Modal> 
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
