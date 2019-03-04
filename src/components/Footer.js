import React, { Fragment } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';


class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        let muscles = this.props.muscles;
        
        return(
            <Fragment>
                <Paper>
                    <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>
                        <Tab label="All" />
                        {muscles.map((muscle, index) =>
                            <Tab key={index} label={muscle} />    
                        )}
                    </Tabs>
                </Paper>
            </Fragment>
        );
    }
}

export default Footer;