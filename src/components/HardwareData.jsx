import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hardwareWrapper: {
        textAlign: "center",
        padding: "50px"
    }
}));

const FacebookPosts = () => {
    const classes = useStyles();
    return (
        <div className={classes.hardwareWrapper}>
            <h1>Comming Soon</h1>
        </div>
    )
}

export default FacebookPosts;