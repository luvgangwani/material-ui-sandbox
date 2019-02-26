import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Exercise Database
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;