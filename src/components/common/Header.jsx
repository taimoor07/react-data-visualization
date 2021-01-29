import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    Link: {
        textDecoration: "none",
        paddingRight: "10px",
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        PSL Group - Reactjs Test
                    </Typography>
                    <Link className={classes.Link} to="/fb-posts">
                        <Button variant="contained" color="primary">Task 1</Button>
                    </Link>
                    <Link className={classes.Link} to="/hardware">
                        <Button variant="contained" color="primary">Task 2</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;