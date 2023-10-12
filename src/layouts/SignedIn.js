import React from 'react'
import { Dropdown, Image, DropdownMenu, Menu } from 'semantic-ui-react'


//giris yapmis kisi icin olusacak goruntu
export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item position='right'>
        <Image avatar spaced ="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEP6UVN_VlaUmh54QsQynuJ3wG3HPnQy8ORnx4m9VS8zUD3EWT_OAlbbwDTex6BGaxDXk&usqp=CAU" />
            <Dropdown pointing = "top left" text="Abs">
                <Dropdown.Menu>
                    <Dropdown.Item text ="bilgilerim" icon="info"/> 
                    <Dropdown.Item onClick = {signOut}text ="çıkış yap" icon="sign-out"/> 
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
            
    </div>
  )
}