import React from 'react'
import { Table , Segment , Icon } from 'semantic-ui-react'

const RenderOrdersTable = () => {
    return (
        <Segment>
        <Table singleLine basic={'very'} style={{padding:'20px 20px 0 20px'}}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={'2'} textAlign={'center'}>Order ID</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Customer Name</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Email</Table.HeaderCell>
                    <Table.HeaderCell width={'3'}>Order Date</Table.HeaderCell>
                    <Table.HeaderCell width={'2'} textAlign={'center'}>Amount</Table.HeaderCell>
                    <Table.HeaderCell width={'3'} textAlign={'center'}>Order Detail</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body >
            <Table.Row>
                <Table.Cell textAlign={'center'}>3087</Table.Cell>
                <Table.Cell>Vatcharapong Pothiboot</Table.Cell>
                <Table.Cell>vchrpng33@yahoo.com</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell textAlign={'center'}>1025</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'ellipsis horizontal'}/></Table.Cell>
            </Table.Row>
                <Table.Row>
                <Table.Cell textAlign={'center'}>3087</Table.Cell>
                <Table.Cell>Pakhapong Kanchanamai</Table.Cell>
                <Table.Cell>shop@yahoo.com</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell textAlign={'center'}>1025</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'ellipsis horizontal'}/></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell textAlign={'center'}>3087</Table.Cell>
                <Table.Cell>Tanawat Piyaprapapan</Table.Cell>
                <Table.Cell>moss@yahoo.com</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell textAlign={'center'}>1025</Table.Cell>
                <Table.Cell textAlign={'center'} ><Icon name={'ellipsis horizontal'}/></Table.Cell>
            </Table.Row>
            </Table.Body>
            <Table.Footer fullWidth>
            <Table.Row>
                <Table.HeaderCell colSpan='6'>
               
                </Table.HeaderCell>
            </Table.Row>
            </Table.Footer>
        </Table>
        </Segment>
    )
}

export default RenderOrdersTable