import React from 'react'
import { Table , Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getVisibleUsers } from '../../reducers/users'

const RenderUsers = ({ users }) => {
    const mapUsers = users.map((user,index) => 
        <Table.Row key={user.id}>
          <Table.Cell textAlign={'center'} >{user.id}</Table.Cell>
          <Table.Cell >{user.email}</Table.Cell>
          <Table.Cell>{user.regisDate}</Table.Cell>
          <Table.Cell textAlign={'center'}>{user.type}</Table.Cell>
          <Table.Cell textAlign={'center'} ><Icon name={'x'}/></Table.Cell>
      </Table.Row>
    )
    return (
        <Table.Body>
            {mapUsers}
        </Table.Body>
    )
}

const mapStateToProps = state => ({
    users : getVisibleUsers(state.users)
})


export default connect(mapStateToProps)(RenderUsers)

