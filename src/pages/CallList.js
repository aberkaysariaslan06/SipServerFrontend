import React, { useState, useEffect} from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import CallService from '../services/callService'
import { useDispatch } from 'react-redux';
import { addToCartForCall } from '../store/actions/cartActions';


export default function CallList (){

  const dispatch = useDispatch() //fonksiyonu cagirmak icin

  const [calls, setCalls] = useState([])

  const handleAddToCart=(call)=>{
    dispatch(addToCartForCall(call))

  }
  
  useEffect(() => {
    let callService = new CallService()
    callService.getAllCalls().then((result) => setCalls(result.data.data));
  }, []);
  /*
  let callService = new CallService();
  callService.getAllCalls().then((result) => {
    console.log(result.data);
  }) */
  
  return (
    
    <div>
      
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Call Id</Table.HeaderCell>
        <Table.HeaderCell>Call Name</Table.HeaderCell>
        <Table.HeaderCell>Duration(second)</Table.HeaderCell>
        <Table.HeaderCell>Start Time</Table.HeaderCell>
        <Table.HeaderCell>End Time</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>

      </Table.Row>
    </Table.Header> 


    
    <Table.Body>
{calls.map((call) => (
  //    <Link to={`/api/calls/${call.callId}`}>{call.callName}</Link>
<Table.Row key={call.callId}>
  <Table.Cell>{call.callId}</Table.Cell>
  <Table.Cell> <Link to={`/calls/${call.callId}`}>{call.callName}</Link> </Table.Cell>
  <Table.Cell>{call.durationSecond}</Table.Cell>
  <Table.Cell>{call.startTime}</Table.Cell>   
  <Table.Cell>{call.endTime}</Table.Cell>
  <Table.Cell>{call.callStatus}</Table.Cell>
  <Table.Cell><Button onClick={()=>handleAddToCart(call)}>add</Button></Table.Cell>

</Table.Row>
))}
</Table.Body>


    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  
    </div>
  )

}




