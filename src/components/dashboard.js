import React, {Component} from 'react';
import {Button, Grid, Card} from '@material-ui/core';
import { styles } from 'ansi-colors';

export default class Dashboard extends Component{
    constructor(props){
        super();
    }

    render(){

        const styles = {
            container: {
                width: 500,
                height: 500,
            }
        }

        return(
            <div>
                <div>
                    <Button>Logout</Button>
                    dashboard
                </div>
                <Grid container justifyContent="center" alignItems="center">
                    <Card style={styles.card}>
                        ss
                        <div spacing={100}>
                            G
                        </div>
                    </Card>
                </Grid>
            </div>
        );
    }
}