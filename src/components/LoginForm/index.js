import React, { Component } from 'react'
import { Button, Form , Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    render() {
        return (
        <Segment padded={'very'}>
            <Form size='large'>
                <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                />
                <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                />

                <Button fluid size='large'>
                    Login
                </Button>
            </Form>
        </Segment>
        )
    }
}

export default LoginForm