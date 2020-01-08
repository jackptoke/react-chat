import React from "react";
import Message from "./Message";
import NewMessageForm from "./NewMessageForm";
import {connect} from 'react-redux';
import store, {fetchMessages} from "./store";

store.dispatch(fetchMessages());

class Channel extends React.Component {
  renderMessages() {
    return this.props.messages.map(message => (
      <Message key={message.id} {...message} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Main Channel</h2>
        <div className="channel">
          <div className="messages">
            <div>{this.renderMessages()}</div>
          </div>
          <NewMessageForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Channel);
