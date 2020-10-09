import React, { Component } from 'react';
import Appnew from './Appnew';
import './styles/bootstrap/bootstrap.min.css';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appnew />
      </Provider> 
    );
  }
}

export default App;
