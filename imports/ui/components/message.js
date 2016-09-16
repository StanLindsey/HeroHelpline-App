import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Message = React.createClass({
  render() {
    return(
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="" alt="" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Media heading</h4>
          ...
        </div>
</div>
    );
  }
});

