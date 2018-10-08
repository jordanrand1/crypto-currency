import React, { Component } from 'react';
import axios from 'axios';
import { Header, Button } from 'semantic-ui-react';

class Home extends Component {

  clicky = () => {
    axios.post('/api/coins?coin=btc')
      .then( res => {debugger})
  }

  clicky2 = () => {
    axios.post('/api/coins')
      .then( res => {debugger})
  }

  render() {
    return (
      <>
      <Header as="h1" textAlign="center">Home Component</Header>
      <Button onClick={this.clicky}>
        click me :(
      </Button>
      <Button onClick={this.clicky2}>
        click me :)
      </Button>
      </>
    );
  }
}

export default Home;

