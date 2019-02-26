import React, { Fragment } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';


class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Paper>
                    <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Paper>
            </Fragment>
        );
    }
}

export default Footer;