import React from 'react'
import { Menu , Icon , Image ,Dropdown , Feed , Label } from 'semantic-ui-react'

const avatar = ( <Image centered shape='circular' size={'mini'} src='https://react.semantic-ui.com/assets/images/avatar/large/patrick.png' />)



const NotificationBar = () => {
    return (
        <Menu borderless size={'massive'}  style={{marginTop:'0',zIndex:'2'}}>
        <Menu.Item>
        <Icon name={'connectdevelop'} />
       <label style={{marginLeft:'20px',marginRight:'25px',fontSize:'14px'}}>DASHBOARD</label>
        </Menu.Item>
        <Menu.Item position={'right'}>
          <Label
          color={'red'}
          size={'mini'}
          style={{position:'relative',top:'-7px',left:'29px',zIndex:'2',marginLeft:'0'}} 
          circular >5</Label>
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
    
        <Dropdown
         pointing={'top right'} icon={null} trigger={avatar}>
         <Dropdown.Menu  style={{fontSize:'14px'}} >
          <Dropdown.Item text={'Setting'} icon={'setting'}/>
          <Dropdown.Item text={'Sign Out'} icon={'sign out'}/>
          
         </Dropdown.Menu>
         </Dropdown>
        </Menu.Item>
        <Menu.Item/>

    
      </Menu>
    )
}

export default NotificationBar