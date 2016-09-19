import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Message } from '../components/message';


export const ConversationContainer = React.createClass({
  randomResponseTime(numMessages){
    return (
      Math.random()*1000 + 2000
    );
  },
  render() {
    let num = 2000;
    const messages = this.props.messages.map((message) => {
      num = this.randomResponseTime(this.props.messages.length) + num;
      return (
        <Message
          key={'message-' + message.id}
          id={message.id}
          name={message.name}
          message={message.message}
          wait={num}
        />
      );
    });
    return (
      <div>
        {messages}
      </div>
    );
  },
});