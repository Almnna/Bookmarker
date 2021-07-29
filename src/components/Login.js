import React, { Component } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';


export default class Login extends Component {
    constructor(props){
        super();
        let bar = true;
    }

    loginBtnHandler(view, bar){
        let isUser = false;
        for(let index = 0; index < localStorage.length; index++){
            let username = localStorage.key(index);
            console.log(username);
            if(username === this.props.username()){
                if(localStorage.getItem(username) === this.props.password()){
                    alert("Welcome Back " + username + "🔥");
                    isUser = true;
                    // this.props.updateAppBar(bar);
                    // this.props.updateView(view);
                    break

                }else{
                    alert("wrong password for " + username);
                    break
                }
            }
        }
        if(!isUser){alert("this user doesn't exists!")}
        console.log(`textinput-username: ${this.props.username()} + textinput-password: ${this.props.password()}`);
    }

    render(){
        return (
            <Card style={this.props.styles.loginCardContainer}>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput} variant="outlined" placeholder="Username" value={this.props.username()} onChange={(e)=>{this.props.setUsername(e)}}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput}  variant="outlined" type="password" placeholder="Password" value={this.props.password()} onChange={(e)=>{this.props.setPassword(e)}}></TextField>
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
