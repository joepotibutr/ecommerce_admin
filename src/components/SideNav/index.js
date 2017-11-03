import React from 'react'
import { List , Item , Sidebar } from './styled'
import RenderLink from '../Etc/RenderLink'
import { Icon } from 'semantic-ui-react'

const SideNav = () => {
    return (
        <Sidebar>
        <List>
            <div style={{marginTop:'50px'}}>
            <Item>
                <Icon disabled inverted name="home"/>
                <RenderLink to='/overview'>Overview</RenderLink>
            </Item>
            <Item>
                <Icon disabled inverted name={'users'}/>
                <RenderLink to='/manage-users'>Manage Users</RenderLink>
            </Item>
            <Item>
                <Icon disabled inverted name={'line graph'}/>
                <RenderLink to='/orders'>Orders</RenderLink>
            </Item>
            <Item>
                <Icon disabled inverted name={'tags'}/>
                <RenderLink to='/products'>Products</RenderLink>
            </Item>
            </div>
        </List>
 
        </Sidebar>
    )
}


export default SideNav