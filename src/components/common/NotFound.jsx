import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    notFound: {
        textAlign: "center",
        padding: "50px"
    }
}));

function NotFound() {
    const classes = useStyles();

    return (
        <div className={classes.notFound}>
            <h1>Page Not Found</h1>
        </div>
    );
}

export default NotFound;