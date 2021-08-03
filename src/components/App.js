import React, {Component} from 'react';
import { Container, Grid, AppBar, Button, 
  CssBaseline, Toolbar, Typography} from '@material-ui/core';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './dashboard';
import {Bookmarks, VpnKey, ExitToAppSharp} from '@material-ui/icons'


export default class App extends Component{
  state = {
    bar: false,
    view: 'login',
    username: '',
    password: '',
  }

  setUsername = (e) =>{
    this.setState({"username": e.target.value});
  }

  getUsername = () =>{
    return this.state.username;
  }

  setPassword = (e) =>{
      this.setState({"password": e.target.value});
  }

  getPassword = () =>{
    return this.state.password;
  }

  updateAppBar = (bar) => {
    if(bar){
      this.setState({bar: true})
    }else{
      this.setState({bar: false})
    }
  }

  clearInputs = () => {
    this.state.username = "";
  }

  logoutUser = (username) => {
    this.clearInputs();
    this.updateView('login');
    alert(` 👋 \n\n See You Later ${username} !`);
  }

  isLoggedIn = () => {
    if(this.state.username !== ""){
      return true;
    }
    return false;
  }

  logInUser = (user) => {
    this.state.username = user;
    this.updateView('dashboard');
  }

  updateView = (value) => {
    if(this.state.view === "login" && value === "signup"){
      this.clearInputs()
    }
    this.setState({
      view: value
    });
  }

  createAccount = (username, password) => {

  }

  styles = {
    container:{
        paddingTop: 50,
        paddingBottom: 20,
        width: 400,
        backgroundColor: 'white',
    },
    loginCardContainer:{
      paddingTop: 50,
      marginTop: 30,
      paddingBottom: 20,
      width: 400,
      backgroundColor: 'white',
    },
    margin: {
        margin: 10,
    },
    textinput:{
        width: '80%',
        margin: 10,
    },
    login:{
        marginTop: 30,
        width: '80%',
        marginBottom: 10
    },
    txt:{
        marginTop: 5,
    },
    title:{
      marginTop: 80,
      marginBottom: 10,
    }
  }

  render(){

    const currentView = () =>{
      switch (this.state.view) {
        case 'login':
          if(this.isLoggedIn()){
            this.updateView("dashboard")
          }
          return <Login  updateView={this.updateView} updateAppBar={this.updateAppBar} styles={this.styles} 
          setUsername={this.setUsername}  setPassword={this.setPassword}
          getUsername={this.getUsername} getPassword={this.getPassword} logInUser={this.logInUser}/>
        case 'signup':
          return <Signup updateView={this.updateView} createAccount={this.createAccount} setUsername={this.setUsername} getUsername={this.getUsername} styles={this.styles} />
        case 'dashboard':
          return <Dashboard updateView={this.updateView} logoutUser={this.logoutUser} updateAppBar={this.updateAppBar} getUsername={this.getUsername} styles={this.styles} />
        default:
          return <Login updateView={this.updateView} updateAppBar={this.updateAppBar} styles={this.styles}
            setUsername={this.setUsername}  setPassword={this.setPassword}
            getUsername={this.getUsername} getPassword={this.getPassword} logInUser={this.logInUser}/>
      }
    }

    const title = () => {
        if(this.state.view === 'login'){
          return(
            <Typography variant="h4" style={this.styles.title}>
              LOGIN <VpnKey/>
            </Typography>
          )
        }else if(this.state.view === 'signup'){
          return(
            <Typography variant="h4" style={this.styles.title}>
              Create New Account <ExitToAppSharp/>
            </Typography>
          )
        }
    }

    const isAppBar = () => {
      if(this.state.bar){
          return(
              <div>
                  <AppBar position="relative" color="#fff">
                    <CssBaseline />
                    <Toolbar>
                      <Bookmarks />
                      <Typography variant="h4">Bookmarker</Typography>
                    </Toolbar>
                  </AppBar>
              <main>
              <div>
                  <Container maxWidth="sm">
                    <Typography style={this.styles.font} variant="h4" align="center" color="black" gutterBottom>
                      {title()}
                    </Typography>
                    <div>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          {currentView()}
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                </div>
              </main>
              </div>
            )
          }else{
            return(
              <div>
                  {/* <AppBar position="relative" color="#fff">
                    <CssBaseline />
                    <Toolbar>
                      <Bookmarks />
                      <Typography variant="h4">Bookmarker</Typography>
                    </Toolbar>
                  </AppBar> */}
                <main>
                  <div>
                    <Container maxWidth="sm">
                      <Typography style={this.styles.font} variant="h4" align="center" color="black" gutterBottom>
                        {title()}
                      </Typography>
                      <div>
                        <Grid container spacing={2} justify="center">
                          <Grid item>
                            {currentView()}
                          </Grid>
                        </Grid>
                      </div>
                    </Container>
                  </div>
                </main>
              </div>
            )
          }
        }

        return(
          <>
            {console.log(this.state.bar)}
            {isAppBar()}
          </>
        )
    }
}