import React from 'react'
import { Grid , Segment } from 'semantic-ui-react'

const OrderDetail = ({ detail }) => {

    const mapOrderItems = detail.items.map((item,idx) => 
        <Grid.Row columns={'2'} style={{padding:'0 20px'}} key={idx}>
            <Grid.Column>
                {item.title}
                <br/>
                {item.category}
                <br/>
               size : {item.size}
            </Grid.Column>
            <Grid.Column textAlign={'right'}>
            $ {item.price}
            </Grid.Column>
                <hr style={{width:'94%'}}/>
        </Grid.Row>
    )

    return (
        <Grid>
            <Grid.Row><Grid.Column>ID : {detail._id}</Grid.Column></Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Grid>
                            <Grid.Row columns={'2'}>
                            <Grid.Column>
                               <strong> Customer </strong> <br/>
                                Name <br/>
                                Email <br/>
                                Phone <br/>
                            </Grid.Column>
                            <Grid.Column>
                                    <br/>
                               {detail.fullname} <br/>
                                {detail.email} <br/>
                               {detail.phone} <br/>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Grid.Column>
               <Segment>
               <Grid>
                   <Grid.Row columns={'2'}>
                   <Grid.Column>
                   <strong>  Shipping Address  </strong> <br/>
                        City <br/>
                       Country <br/>
                       Province <br/>
                       Postcode <br/>
                   </Grid.Column>
                   <Grid.Column>
                       <br/>
                          {detail.city} <br/>
                       {detail.country} <br/>
                       {detail.province} <br/>
                       {detail.postcode} <br/>
                   </Grid.Column>
                   </Grid.Row>
               </Grid>
           </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign={'center'}>
                <strong>   Order Summary  </strong>
                </Grid.Column>
            </Grid.Row>
            <hr style={{width:'82%'}}/>
            
                {mapOrderItems}
         
            
            <Grid.Row columns={'2'} style={{padding:'0 20px 20px 20px'}}>
                <Grid.Column>
                    Subtotal
                    <br/>
                    Shipping
                    <br/>
                    Duties and taxes
                    <br/>
                    Order total
                </Grid.Column>
                <Grid.Column textAlign={'right'}>
                    $ 1050
                    <br/>
                    $ 0.00
                    <br/>
                    included
                    <br/>
                    $ 1050
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}


export default OrderDetail