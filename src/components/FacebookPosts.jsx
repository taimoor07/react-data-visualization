import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NivoBarChart from './common/NivoBarChart';

const useStyles = makeStyles((theme) => ({
    fbPosts: {
        textAlign: "center"
    }
}));

const FacebookPosts = () => {
    const classes = useStyles();

    const data = [
        {
            Angry: 2,
            Comments: 2,
            Haha: 2,
            Likes: 36,
            Love: 2,
            Shares: 3,
            Wow: 4,
            PageName: "Pakistan Motorways Police"
        },
        {
            Angry: 2,
            Comments: 2,
            Haha: 2,
            Likes: 16,
            Love: 2,
            Shares: 3,
            Wow: 4,
            PageName: "The City School E-11 Campus"
        }
    ];

    return (
        <div className={classes.fbPosts}>
            <h1>Facebook Post showed by industory</h1>
            <NivoBarChart data={data} />
        </div>
    )
}

export default FacebookPosts;