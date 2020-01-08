import React from "react";

class Message extends React.Component {
  render() {
    const { user, text } = this.props;
    return (
      <div className="message">
        <strong className="user">{user}</strong> {text}
      </div>
    );
  }
}

export default Message;
