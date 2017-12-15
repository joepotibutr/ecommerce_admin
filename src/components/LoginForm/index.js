import React, { Component } from 'react'
import { Button, Form , Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
            username : '',
            password : '' },
            loading:false,
        }
    }
    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }
    onSubmit = () => {
        this.setState({ loading : true })
        setTimeout(() =>
        this.props.submit(this.state.data)
        .catch(err => this.setState({ 
            loading : false 
        })),2000)
}

    render() {
        return (
        <Segment padded={'very'}>
            <Form size='large' onSubmit={this.onSubmit} loading={this.state.loading}>
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