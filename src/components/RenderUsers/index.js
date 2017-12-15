import React from 'react'
import { Table , Icon , Confirm } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleUsers } from '../../reducers/users'

class RenderUsers extends React.Component {

    state = { 
        open: false,
        username : null
     }
     show = username => this.setState({ open: true , username : username })
   
     handleCancel = () => this.setState({ open: false })

    render(){
        const { del , users } = this.props

        const mapUsers = users.map((user,index) => 
        <Table.Row key={index}>
            <Table.Cell textAlign={'center'} >{index + 1}</Table.Cell>
            <Table.Cell >{user.email}</Table.Cell>
            <Table.Cell>{user.createdAt}</Table.Cell>
            <Table.Cell textAlign={'center'} >
                <Icon
                    style={{cursor:'pointer'}}
                    onClick={() => this.show(user.email)}
                    name='delete'
                />
            </Table.Cell>
      </Table.Row>
    )
    return (
        <Table.Body>
            <Confirm
                header='Delete User'
                open={this.state.open}
                content='Are you sure ?'
                onCancel={this.handleCancel}
                onConfirm={() => { 
                 this.setState({ open : false })
                    return del({username : this.state.username })
                }}
        />
            {mapUsers}
        </Table.Body>
    )
    }
}

const mapStateToProps = state => ({
    users : getVisibleUsers(state.users)
})


export default connect(mapStateToProps)(RenderUsers)

