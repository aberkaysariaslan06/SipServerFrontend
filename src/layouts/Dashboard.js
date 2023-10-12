import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import CallList from '../pages/CallList'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route,Routes} from 'react-router-dom'
import CallDetail from '../pages/CallDetail'
import DomainDetail from '../pages/DomainDetail'
import HomePage from '../pages/HomePage'
import CallAdd from '../pages/CallAdd'
import DomainAdd from '../pages/DomainAdd'
import DomainList from '../pages/DomainList'
import CartSummary from './CartSummary'

export default function Dashboard() {
  return (
    
    <div>
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                
                </Grid.Column>
                <GridColumn width={16}>
                  <Routes>
                  <Route exact path='/' element={<HomePage/>}/>
                  <Route exact path='/callList' element={<CallList/>}/>
                  <Route path='/calls/:callId' element={<CallDetail/>}/> 
                  <Route exact path='/domainList' element={<DomainList/>}/> 
                  <Route exact path='/call/add' element={<CallAdd/>}/> 
                  <Route exact path='/domain/add' element={<DomainAdd/>}/> 
                  <Route path='/domains/:domainId' element={<DomainDetail/>}/> 
                  <Route path='/cart' element={<CartSummary/>}/> 

                  </Routes>
                
                </GridColumn>
            </Grid.Row>
        </Grid>
        
       
        </div>
  )
}
//Grid 16 parca oldugu icin 4'e 12 olarak ayirdik