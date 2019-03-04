import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const style = {
            Paper: {
                padding: 20,
                marginTop: 10,
                marginBottom: 10
            }
        }
        const exercises = this.props.exercises;
        return (
            <Grid container>
                 <Grid item sm>
                    <Paper style={style.Paper}>
                        {exercises.map(([muscle, exercises], index) => (
                            <Fragment key={index}>
                                <Typography
                                key={index}
                                variant="headline"
                                style={{textTransform: 'capitalize'}}>
                                    {muscle}
                                </Typography>
                                <List component="nav">
                                    {
                                        exercises.map(({ title }, index) => (
                                            <ListItem key={index} button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Fragment>
                        ))}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={style.Paper}>
                        <Typography 
                        variant="display1">
                            Welcome!
                        </Typography>
                        <Typography 
                        variant="subheading"
                        style={{marginTop:20}}>
                            Please select an exercise from the left!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Content;