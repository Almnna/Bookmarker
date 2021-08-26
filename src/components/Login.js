import React, { Component } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';


export default class Login extends Component {
    constructor(props){
        super();
        let bar = true;
    }

    state = {
        username: '',
        password: ''
    }

    setUsername = (e) => {
        this.setState({"username": e.target.value});
    }

    setPassword = (e) => {
        this.setState({"password": e.target.value});
    }

    loginBtnHandler(view, bar){
        if(this.state.username === "" || this.state.password === ""){
            alert(`⚠️ \n\n Please Fill All The Required Fields!`);
            return;
        }
        let password = localStorage.getItem(this.state.username);
        if(password){
            if( this.state.password  === password ){
                //console.log("passwords matched")
                //this.props.Log()
                this.props.logInUser(this.state.username);
                alert("Welcome Back " + this.props.getUsername() + " 🔥");
                //send to dashboard
            }else{
                //console.log("passwords don't matched")
                alert("⚠️ \n\n Provided Wrong Password For " + this.state.username);
                return;
            }
        }else{
            alert(`⚠️ \n\n User ${this.state.username} Doesn't Exist!`)
        }
    }

    // style = {
    //     .TextField.selected:{
            
    //     }
    // }
    render(){
        return (
            <Card style={this.props.styles.loginCardContainer}>
                <Grid item align="center">
                    <TextField  style={this.props.styles.textinput} variant="outlined" placeholder="Username" value={this.state.username} autoFocus={true} onChange={(e)=>{this.setUsername(e)}}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput} variant="outlined" type="password" placeholder="Password" value={this.state.password} onChange={(e)=>{this.setPassword(e)}}></TextField>
                </Grid>
                <Grid item align="center">
                    <Button style={this.props.styles.buttons} variant="outlined" onClick={()=>{this.loginBtnHandler('dashboard', true)}}>Login</Button>
                </Grid>
                <Grid item align="center">
                    <Button onClick={()=>{this.props.updateView('signup')}}>Create New Account</Button>{/*<Typography style={this.props.styles.txt} variant="h7">Don't u have an account?</Typography>*/}
                </Grid>
            </Card>
        );
    }
}
