import React, { Component } from 'react'
import { Grid , Segment } from 'semantic-ui-react'

class LoginAdmin extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Segment raised>
                           LOGIN AS ADMIN
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default LoginAdmin
