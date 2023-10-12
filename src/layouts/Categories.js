import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function Categories() {
  return (
    <div>
         <Menu pointing vertical>
        <Menu.Item
          name='users'        
        />
        <Menu.Item
          name='calls'      
        />
        <Menu.Item
          name='domains'
        />
      </Menu>
    </div>
  )
}
