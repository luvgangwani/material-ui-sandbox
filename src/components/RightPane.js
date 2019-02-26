import React from 'react';

import { Grid, Paper } from '@material-ui/core';

class RightPane extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid item sm>
                <Paper style={this.props.style}>
                    Right Pane
                </Paper>
            </Grid>
        );
    }
}

export default RightPane;