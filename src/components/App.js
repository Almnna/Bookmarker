import React, {Component} from 'react';
import { Container, Button } from '@material-ui/core';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './dashboard';



/*

  updateView = (value) =>{
    this.setState({view: value});
  }

  render(){
    const switchComponent = () =>{
      switch (this.state.view) {
        case 'login':
            return <Login updateView={this.updateView} />;
        case 'dashboard':
          return <Dashboard updateView={this.updateView} />
        default:
          return <Login/>;
      }
    }
*/


export default class App extends Component{
  state = {
    view: 'login',
  }

  updateView = (value) => {
    this.setState({
      view: value
    });
  }

  render(){

    const currentView = () =>{
      switch (this.state.view) {
        case 'login':
          return <Login updateView={this.updateView} />
        case 'signup':
          return <Signup updateView={this.updateView} />
        case 'dashboard':
          return <Dashboard updateView={this.updateView} />
        default:
          return <Login updateView={this.updateView} />
      }
    }
    return(
      <div>
        {currentView()}
      </div>
    )
  }
}