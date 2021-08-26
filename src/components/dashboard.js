import React, {Component} from 'react';
import {Button, Grid, Card} from '@material-ui/core';
import { styles } from 'ansi-colors';

export default class Dashboard extends Component{
    constructor(props){
        super();
        this.defaultLogoutView = 'login';
        this.bar = false
    }

    logoutBtnHandler = () => {
        this.props.updateAppBar(this.bar);
        this.props.logoutUser(this.props.getUsername());
        // console.log("updating appbar to " + this.bar)
        // this.props.updateView(this.defaultLogoutView);
    }

    render(){

        const styles = {
            container: {
                width: 500,
                height: 500,
                padding: 100,
            },
            card: {
                backgroundColor: '#fff',
            }
        }

        return(
            <div>
                <div>
                    <Button onClick={()=>{this.logoutBtnHandler()}}>Logout</Button>
                </div>
                <Grid container justifyContent="center" alignItems="center">
                    <Card style={styles.card}>
                        <div>
                            {this.props.getUsername()}
                        </div>
                    </Card>
                </Grid>
                <Grid container justifyContent="left">
                    Username: {this.props.getUsername()}
                </Grid>
            </div>
        );
    }
}