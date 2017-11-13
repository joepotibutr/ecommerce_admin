import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'
import { spring , Motion } from 'react-motion'

class LoginAdmin extends Component {
    render() {
        return (
            <Motion 
            defaultStyle={{ width: 0}} 
            style={{ width: spring(100) }}>
                {(style) => 
                <div style={{width:`${(style.width)}%`}}>
                    <div style={{backgroundColor:'#1b1c1d',height:'102vh' }}>
                        <Grid
                        textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'
                        >
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <LoginForm/>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>}
            </Motion>
        )
    }
}

export default LoginAdmin
