import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import RenderStatistic from '../components/RenderStatistic'
import SideNav from '../components/SideNav'
import NotificationBar from '../components/NotificationBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Overview extends Component {
    render() {
        return (
            <div>
            <SideNav/>
            <NotificationBar/>
            <div style={{float:'right',width:'86%',padding:'20px 60px'}}>
                <Grid style={{padding:'30px'}}>
                    {/* <Grid.Row><h4>Ecommerce Overview</h4></Grid.Row> */}
                    <Grid.Row>
                        <Grid.Column>
                            <RenderStatistic/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {/* <h4>Top Selling Products</h4> */}
                        </Grid.Column>
                    </Grid.Row>

                    
                </Grid> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.admin.token
})

export default connect(mapStateToProps)(Overview)
