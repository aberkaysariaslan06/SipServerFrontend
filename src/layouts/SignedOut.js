import React from 'react'
import { Button, Menu} from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button inverted color= 'orange' onClick={signIn}primary>Giris Yap</Button>
        <Button inverted color = 'orange' style = {{marginLeft: '0.5em'}}>Kayit Ol</Button>
      </Menu.Item>
        

    </div>
  )
}
