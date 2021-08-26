import React, { Component } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';

export default class Signup extends Component {
    constructor(props){
        super();
    }

    state = {
        username: '',
        password: '',
        rpassword: '',
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

    confirmDetails(e){
        if(this.state.username === "" || this.state.password === "" || this.state.rpassword === ""){
            alert(" ⚠️ \n\n Please Fill All The Required Fields!");
            return;
        }
        //e.preventDefault()
        // console.log(this.state.username)
        // console.log(this.state.password)
        // console.log(this.state.rpassword)
        if(localStorage.getItem(this.state.username)){
            alert("⚠️ \n\n An account with this username already exists please try a different one!")
            return;
        }

        if(this.state.password !== this.state.rpassword){
            alert("⚠️ \n\n Passwords Don't Match!")
            return;
        }

        localStorage.setItem(this.state.username, this.state.password);
        alert(`✅ \n\n User ${this.state.username} \n Was Created Successfully! `);
        this.props.updateView('login');
    }

    render(){
        return (
            <Card style={this.props.styles.container}>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput} variant="outlined" placeholder="Username" value={this.state.username} onChange={(e)=>this.setUsername(e)}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput}  variant="outlined" placeholder="Password" type="password" value={this.state.password} onChange={(e)=>this.setPassword(e)}></TextField>
                </Grid>
                <Grid item align="center">
                    <TextField style={this.props.styles.textinput}  variant="outlined" placeholder="Confirm Password" type="password" value={this.state.rpassword} onChange={(e)=>this.setRPassword(e)}></TextField>
                </Grid>
                <Grid item align="center">
                    <Button style={this.props.styles.buttons} variant="outlined" onClick={()=>{this.confirmDetails()}}>Create</Button>
                </Grid>
                <Grid item align="center">
                    <Button onClick={()=>{this.props.updateView('login')}}>Login</Button>{/*<Typography style={this.props.styles.txt} variant="h7">Already have an account? </Typography>*/}
                </Grid>
            </Card>
        );
    }
  }
