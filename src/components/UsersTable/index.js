import React from 'react'
import { Table , Segment , Button , Icon } from 'semantic-ui-react'



const UsersTable = ({ users , children }) => {
        return (
            <Segment>
            <Table singleLine basic={'very'} size={'small'} style={{padding:'20px 20px 0 20px'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={'2'} textAlign={'center'} >User ID</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell textAlign={'center'}>Permission Type</Table.HeaderCell>
                        <Table.HeaderCell textAlign={'center'} >Delete User</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
              
                    {children}
               
                <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                    <Button floated='right' icon labelPosition='left' size='small'>
                        <Icon name='user' /> Add User
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
            </Segment>
        )
    
}



export default UsersTable