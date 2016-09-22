import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as boxActions from './actions/movebox';
import BoxComponent from './components/box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxComponent box={this.props.box} actions={this.props.actions}/>
      </div>
    );
  }
}

export default connect(
  state => ( { box: state.box } ),
  dispatch => ({ actions: bindActionCreators(boxActions, dispatch) })
)(App);
