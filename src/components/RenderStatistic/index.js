import React from 'react'
import { Card , Label , Statistic , Container } from 'semantic-ui-react'

const RenderStatistic = () => {
    return (
        <Card.Group itemsPerRow={'3'}>
        <Card>
            <Card.Content>
                <Label size={'large'} color='red' ribbon>Orders</Label>
                <Container textAlign='center'>
                <Statistic>
                    <Statistic.Value>452</Statistic.Value>
                </Statistic>
                </Container>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Label size={'large'} color='green' ribbon>Income</Label>
                <Container textAlign='center'>
                <Statistic >
                    <Statistic.Value>3,452</Statistic.Value>
                    </Statistic>
                </Container>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Label size={'large'} color='blue' ribbon>Customers</Label>
                <Container textAlign='center'>
                <Statistic >
                    <Statistic.Value>89</Statistic.Value>
                    </Statistic>
                </Container>
            </Card.Content>
        </Card>
    </Card.Group>
    )
}

export default RenderStatistic