import React from 'react'
import { Menu , Icon , Container , Image ,Dropdown , Feed } from 'semantic-ui-react'


const NotificationBar = () => {
    return (
        <Menu borderless size={'massive'}  style={{marginTop:'0',zIndex:'2'}}>
        <Menu.Item>
        <Icon name={'connectdevelop'} />
       <label style={{marginLeft:'20px',marginRight:'25px',fontSize:'14px'}}>DASHBOARD</label>
        </Menu.Item>
        <Menu.Item position={'right'}>
          <Dropdown pointing={'top'} icon={'alarm outline'}>
            <Dropdown.Menu style={{left:'-143px',top:'23px'}}>
              <Dropdown.Item>
              <Feed>
              <Feed.Event
                content='You added Elliot Fu to the group Coworkers'
              />
              <Feed.Event>
                <Feed.Content content='You added Elliot Fu to the group Coworkers' />
              </Feed.Event>
            </Feed>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <label style={{fontSize:'14px'}}>Vatchrapong Pothiboot</label>
        </Menu.Item>
        <Menu.Item>
            <Image centered shape='circular' size={'mini'} src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />
        </Menu.Item>
        <Menu.Item/>

    
      </Menu>
    )
}

export default NotificationBar