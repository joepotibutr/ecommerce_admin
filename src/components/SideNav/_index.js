import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class SideNav extends Component {
    state = { activeItem: 'overview' }
    
      handleItemClick = (e, { name }) => 
      this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Menu pointing secondary vertical>
            <Menu.Item name='overview' active={activeItem === 'overview'} onClick={this.handleItemClick} />
            <Menu.Item name='manage-users' active={activeItem === 'manage-users'} onClick={this.handleItemClick} />
            <Menu.Item name='orders' active={activeItem === 'orders'} onClick={this.handleItemClick} />
            <Menu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick} />
          </Menu>
        )
      }
}

export default SideNav
