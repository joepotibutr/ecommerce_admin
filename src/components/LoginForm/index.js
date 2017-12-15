import React, { Component } from 'react'
import { Button, Form , Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
            username : '',
            password : '' },
            loading:false,
            redirect: false
        }
    }
    onChange = e => {
        this.setState({ 
            data : { ...this.state.data,[e.target.name] : e.target.value }
        })
    }
    onSubmit = () => {
        this.setState({ loading : true })
        setTimeout(() => {
            this.setState({
                redirect : true,
                loading:false
            })
            },2000)
}

    render() {
        if(this.state.redirect)return <Redirect to='/overview'/>

        return (
        <Segment padded={'very'}>
            <Form size='large' onSubmit={this.onSubmit} loading={this.state.loading}>
                <Form.Input
                onChange={this.onChange}
                name='username'
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                />
                <Form.Input
                 onChange={this.onChange}
                name='password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                />

                <Button fluid color='black' size='large'>
                    Login
                </Button>
            </Form>
        </Segment>
        )
    }
}

export default LoginForm