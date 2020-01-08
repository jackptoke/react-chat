import React from "react";

import {Provider} from 'react-redux';

import store from './store';

import "./App.scss";

import Channel from "./Channel";

class App extends React.Component {
  state = {
    messages: []
  };

  addMessage = message => {
    this.setState({ messages: this.state.messages.concat(message) });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Channel />
        </div>
      </Provider>
    );
  }
}

export default App;
