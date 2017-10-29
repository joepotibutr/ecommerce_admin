import React from 'react'
import { List , Item , Sidebar } from './styled'
import RenderLink from '../Etc/RenderLink'
import { Icon , Image , Header , Container , Divider } from 'semantic-ui-react'

const SideNav = () => {
    return (
        <Sidebar>
        <List>
            <div style={{marginBottom:'45px'}}>
            <li style={{marginBottom:'40px'}}>
                <Container>
                <Image centered shape='circular' size={'tiny'} src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
                </Container>
            </li>
            <li style={{marginBottom:'30px'}}>
                <Header inverted textAlign={'center'} as='h4'>
                    Admin
                </Header>
            </li>
            </div>
            <Divider section/>
            <div style={{marginTop:'45px'}}>
            <Item>
                <Icon inverted name="home"/>
                <RenderLink to='/overview'>Overview</RenderLink>
            </Item>
            <Item>
                <Icon inverted name={'users'}/>
                <RenderLink to='/manage-users'>Manage Users</RenderLink>
            </Item>
            <Item>
                <Icon inverted name={'line graph'}/>
                <RenderLink to='/orders'>Orders</RenderLink>
            </Item>
            <Item>
                <Icon inverted name={'tags'}/>
                <RenderLink to='/products'>Products</RenderLink>
            </Item>
            </div>
        </List>
 
        </Sidebar>
    )
}


export default SideNav