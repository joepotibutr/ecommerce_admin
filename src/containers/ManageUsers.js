import React, { Component } from 'react'
import { Grid , Header , Button , Icon , Modal } from 'semantic-ui-react'
import UsersTable from '../components/UsersTable'
import RenderUsers from '../components/RenderUsers'
import { connect } from 'react-redux'
import { setVisibleUsers } from '../actions'
import UserDetail from '../components/UserDetail'
import SideNav from '../components/SideNav'
import NotificationBar from '../components/NotificationBar'
import { Redirect } from 'react-router-dom'

class ManageUsers extends Component {
    componentWillMount(){
        this.props.setVisibleUsers()
    }

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
            </div>
            </div>
        )
        else return <Redirect to='/' />
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated : !!state.admin.username
})

export default connect(mapStateToProps,{setVisibleUsers})(ManageUsers)
