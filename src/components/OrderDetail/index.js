import React from 'react'
import { Grid , Segment } from 'semantic-ui-react'

const OrderDetail = () => {
    return (
        <Grid>
            <Grid.Row><Grid.Column>Order #1231231312</Grid.Column></Grid.Row>
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
                                Vatcharapong Pothiboot <br/>
                                vchrpng@gmail.com <br/>
                                084338374 <br/>
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
                       Country <br/>
                       Province <br/>
                       Phone <br/>
                   </Grid.Column>
                   <Grid.Column>
                           <br/>
                       Thailand <br/>
                       Bangkok <br/>
                       084338374 <br/>
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
            <Grid.Row columns={'2'} style={{padding:'0 20px'}}>
                <Grid.Column>
                    Denim Jacket
                    <br/>
                    Jackets
                    <br/>
                    M
                </Grid.Column>
                <Grid.Column textAlign={'right'}>
                    $ 350
                </Grid.Column>
                <hr style={{width:'94%'}}/>
            </Grid.Row>
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