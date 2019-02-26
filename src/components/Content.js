import React from 'react';
import { Grid } from '@material-ui/core';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

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
        return (
            <Grid container>
                <LeftPane style={style.Paper} />
                <RightPane style={style.Paper} />
            </Grid>
        );
    }
}

export default Content;