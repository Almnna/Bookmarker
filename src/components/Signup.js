import React, { Component } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';

export default class Signup extends Component {
    constructor(props){
        super();
        this.state = {
            username: '',
            password: '',
            rpassword: '',
        }
    }

    setUsername(e){
        this.setState({"username": e.target.value});
    }

    setPassword(e){
        this.setState({"password": e.target.value});
    }

    setRPassword(e){
        this.setState({"rpassword": e.target.value});
    }

    render(){
        return (
            <Card style={this.props.styles.container}>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput} variant="outlined" placeholder="Username" onChange={(e)=>this.setUsername}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput}  variant="outlined" placeholder="Password" onChange={(e)=>this.setPassword}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput}  variant="outlined" placeholder="Confirm Password" onChange={(e)=>this.setRPassword}></TextField>
                </Grid>
                <Grid item align="center">
                    <Button style={this.props.styles.login} color='primary' variant="contained" onClick={()=>{this.props.updateView('dashboard')}}>Login</Button>
                </Grid>
                <Grid item align="center">
                    <Typography style={this.props.styles.txt} variant="h7">Already have an account? <Button color="primary" onClick={()=>{this.props.updateView('login')}}>Login!</Button></Typography>
                </Grid>
            </Card>
        );
    }
  }
