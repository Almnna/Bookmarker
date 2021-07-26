import React, {Component} from 'react';
import { Container, Grid, AppBar, Button, 
  CssBaseline, Toolbar, Typography} from '@material-ui/core';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './dashboard';
import {Bookmarks, VpnKey, ExitToAppSharp} from '@material-ui/icons'


export default class App extends Component{
  state = {
    view: 'login',
  }

  updateView = (value) => {
    this.setState({
      view: value
    });
  }

  styles = {
    container:{
        paddingTop: 50,
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
      marginTop: 20,
      marginBottom: 10,
    }
  }

  render(){

    const currentView = () =>{
      switch (this.state.view) {
        case 'login':
          return <Login updateView={this.updateView} styles={this.styles} />
        case 'signup':
          return <Signup updateView={this.updateView} styles={this.styles} />
        case 'dashboard':
          return <Dashboard updateView={this.updateView} styles={this.styles} />
        default:
          return <Login updateView={this.updateView} styles={this.styles} />
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
              SIGNUP <ExitToAppSharp/>
            </Typography>
          )
        }
    }
    return(
      <>
        <CssBaseline />
        <AppBar position="relative" color="#fff">
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
      </>
    )
  }
}