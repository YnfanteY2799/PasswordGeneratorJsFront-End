import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

const uS = makeStyles(t => ({
    root: { flexGrow: 1, },
    menuButton: { marginRight: t.spacing( 2 ) },
    title: { flexGrow: 1 },
}));

const MainAppBar = ({ open, opener }) => (
    <div className={uS().root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={uS().menuButton}  color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={uS().title}>
                    PassGetter
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export { MainAppBar };