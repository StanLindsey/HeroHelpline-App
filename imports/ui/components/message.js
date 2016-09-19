import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Message = React.createClass({
  getInitialState : function () {
      return({hidden : "hidden"});
  },
  componentWillMount : function () {
      var that = this;
      setTimeout(function() {
          that.show();
      }, that.props.wait);
  },
  show : function () {
      this.setState({hidden : ""});
  },
  messageImg(name){
    if (name === "batmanpub"){
      return "http://emblemsbattlefield.com/uploads/posts/2014/8/batman-emblem-tutorial_2_1.jpg";
    } else if (name === "spidermanpub"){
      return "http://rlv.zcache.com/spider_man_spider_logo_classic_round_sticker-r2b5d46da0d064768a6ceb1e45113f0ae_v9wth_8byvr_324.jpg";
    } else {
      return "http://thumbs4.ebaystatic.com/d/l225/m/mMO-luAR4_yqUzxatGzuyng.jpg";
    }
  },
  render() {
    return(
      <div className={this.state.hidden}
      style={{
              margin:"10px"
            }}
      >
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={this.messageImg(this.props.name)} alt="" width="60px" height="60px" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.name}</h4>
          {this.props.message}
        </div>
    </div>
    </div>
    );
  }
});

