import React, { Component } from 'react'
import { Grid , Image } from 'semantic-ui-react'
import RenderStatistic from '../components/RenderStatistic'
import SideNav from '../components/SideNav'
import NotificationBar from '../components/NotificationBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Pie} from 'react-chartjs-2'

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}


class Overview extends Component {


    render() {
       const realTotal = this.props.orders.reduce((cur,acc) => {
            cur += acc.total
            return cur
        },0)

      const orderByCategory = this.props.orders.map(product => product.items.map(
            item => item.category
        ))
        console.log(orderByCategory)
        orderByCategory.reduce((cur,acc) => {
            const count = 0
            if(cur === acc){
            count + 1}
            console.log(count)
            return 
        },0)

        const realOrders = this.props.orders.length

        return (
            <div>
            <SideNav/>
            <NotificationBar/>
            <div style={{float:'right',width:'86%',padding:'20px 60px'}}>
                <Grid style={{padding:'30px'}}>
                    {/* <Grid.Row><h4>Ecommerce Overview</h4></Grid.Row> */}
                    <Grid.Row>
                        <Grid.Column>
                            <RenderStatistic
                                realTotal={realTotal}
                                realOrders={realOrders}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Pie data={data} />
                        </Grid.Column>
                    </Grid.Row>

                    
                </Grid> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.admin.token,
     orders : state.orders.fetchOrders
})

export default connect(mapStateToProps)(Overview)
