import React, { Component } from 'react';
import CoinForm from './CoinForm'
import CoinList from './CoinList'

class Home extends Component {

  render() {
    return (
      <>
        <CoinForm />
        <CoinList />
      </>
    );
  }
}

export default Home;

