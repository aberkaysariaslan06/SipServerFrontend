import React, { useState, useEffect} from 'react'
import { Icon, Menu, Table, TableBody } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import DomainService from '../services/domainService'

export default function DomainList() {
    const [domains, setDomains] = useState([])

    useEffect(() => {
        let domainService = new DomainService()
        domainService.getAllDomains().then((result) => setDomains(result.data.data));
      }, []);

    return (
        <div>
          <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Domain Id</Table.HeaderCell>
            <Table.HeaderCell>Domain Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header> 




        

        <TableBody>
        {domains.map((domain) => (
  //    <Link to={`/api/calls/${call.callId}`}>{call.callName}</Link>
<Table.Row key={domain.domainId}>
  <Table.Cell>{domain.domainId}</Table.Cell>
  <Table.Cell> <Link to={`/domains/${domain.domainId}`}>{domain.domainName}</Link> </Table.Cell>

</Table.Row>
))}

        </TableBody>

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
