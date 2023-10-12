import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List } from 'semantic-ui-react';

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>Cartınız:</Card.Header>
            {cartItems.map((cartItem) => (
              <List.Item key={cartItem.call.callId}>
                <List.Content>
                  <List.Header>{cartItem.call.callName}</List.Header>
                  <List.Description>
                    Call ID: {cartItem.call.callId}<br />
                    Duration Second: {cartItem.call.durationSecond}<br />
                    Call Status: {cartItem.call.callStatus}<br />
                    {/* Diğer çağrı bilgilerini ekleyin */}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
