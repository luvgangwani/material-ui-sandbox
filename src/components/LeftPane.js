import React from 'react';

import { Grid, Paper } from '@material-ui/core';

class LeftPane extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid item sm>
                <Paper style={this.props.style}>
                    Left Pane
                </Paper>
            </Grid>
        );
    }
}

export default LeftPane;