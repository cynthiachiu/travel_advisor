import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places!
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;