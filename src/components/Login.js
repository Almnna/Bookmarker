import React, { Component } from 'react';
import { Button, Card, CardMedia, Grid, TextField, Typography } from '@material-ui/core';


export default class Login extends Component {
    constructor(props){
        super();
        this.state = {
            username: '',
            password: ''
        }
        let bar = true;
    }


    setUsername(e){
        this.setState({"username": e.target.value});
    }

    setPassword(e){
        this.setState({"password": e.target.value});
    }

    loginBtnHandler(view, bar){
        this.props.updateAppBar(bar);
        this.props.updateView(view);
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
                    <Button style={this.props.styles.login} color='primary' variant="contained" onClick={()=>{this.loginBtnHandler('dashboard', true)}}>Login</Button>
                </Grid>
                <Grid item align="center">
                    <Typography style={this.props.styles.txt} variant="h7">Don't u have an account? <Button color="primary" onClick={()=>{this.props.updateView('signup')}}>SignUp</Button></Typography>
                </Grid>
            </Card>
        );
    }
}
