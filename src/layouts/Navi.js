import React, {useState} from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { useNavigate, Link } from 'react-router-dom';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); //defaultunu false olarak belirledik
  const navigate = useNavigate()
   
  function handleSignOut() { //cikis yapa bastigin zaman calismasi gereken fonksiyon
    setIsAuthenticated(false) 
    navigate("/")

  }
  function handleSignIn() { //fotoya bastigin zaman giris yapsin
    setIsAuthenticated(true) 


  }
  return ( 
    <div>  
         <Menu inverted fixed = "top">
         <Container>            
        <Link to={`/`}><Menu.Item  name='home'/></Link>    
        <Link to = {`/callList`}><Menu.Item name='call list'/></Link>
        <Link to = {`/domainList`}><Menu.Item name='domain list'/></Link>
        <Link to = {`/domain/add`}><Menu.Item name='domain add'/></Link>  
        <Link to = {`/call/add`}><Menu.Item name='call add'/></Link>        
        <Link to = {`/cart`}><Menu.Item name='cart summary'/></Link>        

        <Menu.Menu position='right'>
          {isAuthenticated?<SignedIn signOut={handleSignOut} test = "1" />
          :<SignedOut signIn={handleSignIn}/>}
        </Menu.Menu>  
        </Container>
      </Menu>
   
    </div>
  )
}
