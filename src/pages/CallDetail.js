import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import CallService from '../services/callService'
import Categories from '../layouts/Categories';

export default function CallDetail () {
  
      let {callId} = useParams();
      const [call, setCall] = useState({});

      useEffect(() => {
        let callService = new CallService();
        callService.getByCallId(callId).then(result=> setCall(result.data.data))
      }, [])
      
    
        return (
        <div> <Card.Group>
         <Card fluid>
          <Card.Content>
          <Card.Header>Name: {call.callName}</Card.Header>
          <Card.Header>Domain: {call.domain !==undefined && call.domain.domainName} </Card.Header>
          <Card.Meta>Duration: {call.durationSecond}</Card.Meta>
          <Card.Description> Description: {call.callStatus}.</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group> 
    
   </div> 

      ) 
}

