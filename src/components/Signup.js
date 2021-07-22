import React, { Component } from 'react';
import { Button, Card, CardMedia, Grid, TextField } from '@material-ui/core';

export default class Signup extends Component {
    constructor(props){
        super();
        this.state = {
            username: '',
            password: '',
            rpassword: '',
        }
    }

    styles = {
        container:{
            marginTop: 75,
            width: 500,
            height: 500,
            backgroundColor: '#74b9ff',
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
            <Grid container direction="row" justify="center" alignItems="center">
                <Card style={this.styles.container}>
                    <Grid container>
                        <div>
                            Bookmarker
                        </div>
                    </Grid>
                    <Grid container>
                        <TextField placeholder="Username" onChange={(e)=>this.setUsername}></TextField>
                    </Grid>
                    <Grid container>
                        <TextField placeholder="Password" onChange={(e)=>this.setPassword}></TextField>
                    </Grid>
                    <Grid container>
                        <TextField placeholder="Retype Password" onChange={(e)=>this.setRPassword}></TextField>
                    </Grid>
                    <Grid container>
                        <Button color='primary' onClick={()=>{this.props.updateView('login')}}>Signup</Button>
                    </Grid>
                </Card>
            </Grid>
        );
    }
  }
