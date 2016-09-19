import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { ConversationContainer } from '../containers/conversation';
import { HTTP } from 'meteor/http'

export const Index = React.createClass({
  getInitialState() {
    return {
      messages: [],
      buttonHide:""
    };
  },
  handleGetHelp(){
    HTTP.call( 'GET', 'http://163.172.171.192/help',( error, response ) => {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
        const messages = response.data;
        this.setState({messages, buttonHide: "none"});
      }
    });
  },
  render() {
    return(
      <div>
        <Jumbotron className="text-center"
          style={{
            display:this.state.buttonHide
          }}
        >
          <h2><a className="btn btn-success"
            style={{
              height:"300px",
              width:"300px",
              lineHeight:"350px",
              backgroundColor:"red",
              fontSize:"40px",
              borderRadius: "400px"
            }} onClick={this.handleGetHelp} role="button">I NEED A HERO!</a></h2>
        </Jumbotron>
        <ConversationContainer
          messages={this.state.messages}
        />
      </div>
    );
  }
});
