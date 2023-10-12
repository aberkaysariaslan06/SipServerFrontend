import React, { useState, useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import DomainService from '../services/domainService';
import { useParams } from 'react-router-dom';


export default function DomainDetail() {
  let {domainId} = useParams();
  const [domain, setDomain] = useState({});


  useEffect(() => {
    let domainService = new DomainService();
    domainService.getByDomainId(domainId).then(result=> setDomain(result.data.data))
  }, [])


   return (
    <div> <Card.Group>
     <Card fluid>
      <Card.Content>
      <Card.Header>Domain Name: {domain.domainName}</Card.Header>
      <Card.Header>
         Users: {domain.calls !== undefined && domain.calls.map((call) => call.callName).join(', ')}
      </Card.Header>

      

    </Card.Content>
  </Card>
</Card.Group>
</div> 

  ) 
}
