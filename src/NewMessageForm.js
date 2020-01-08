import React from "react";

import {sendMessage} from './store';
import {connect} from 'react-redux';

class NewMessageForm extends React.Component {
  state = {
    user: null,
    text: null
  };

  updateUser = e => {
    this.setState({ user: e.target.value });
  };

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  sendOnEnter = e => {
    if (e.keyCode === 13) {
      if(this.state.text && this.state.user){
        e.target.value = "";
        this.send();
      }
      
    }
  };

  send = () => {
    this.props.send({text: this.state.text, user: this.state.user});
  };


  render() {
    return (
      <div>
        <input type="text" placeholder="Your name" onChange={this.updateUser} />
        <input
          type="text"
          placeholder="Message Main channel"
          onKeyDown={this.sendOnEnter}
          onChange={this.updateText}
        />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    send: message => {
      dispatch(sendMessage(message));
    }
  }
}

export default connect(null, mapDispatchToProps)(NewMessageForm);
