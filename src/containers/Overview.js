import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import RenderStatistic from '../components/RenderStatistic'

class Overview extends Component {
    render() {
        return (
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
        )
    }
}

export default Overview
