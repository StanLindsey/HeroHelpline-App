import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { ConversationContainer } from '../containers/conversation';

export const Index = React.createClass({
  render() {
    return(
      <div>
        <Jumbotron className="text-center">
          <h2><a className="btn btn-success"  role="button">SEND ME A HERO!</a></h2>
        </Jumbotron>
        <ConversationContainer />
      </div>
    );
  }
});
