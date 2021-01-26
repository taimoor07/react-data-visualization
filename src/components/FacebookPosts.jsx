import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NivoBarChart from './common/NivoBarChart';
const Papa = require("papaparse");
const csvFilePath = '../assets/task1-data.csv'
// const csv = require('csvtojson')

const useStyles = makeStyles((theme) => ({
    fbPosts: {
        textAlign: "center"
    }
}));

const FacebookPosts = () => {
    const classes = useStyles();
    const config = {
        header: false,
        dynamicTyping: false,
    }

    useEffect(() => {
        // let jsonData = Papa.parse("./assets/task1-data.csv", config);
        console.log("🚀 ~ file: FacebookPosts.jsx ~ line 24 ~ useEffect ~ Papa", Papa)
        Papa.parse(csvFilePath, {
            header: false,
            dynamicTyping: false,
            complete: updateData
        });
    }, []);

    const updateData = (result) => {
        console.log("🚀 ~ file: FacebookPosts.jsx ~ line 35 ~ updateData ~ result", result)
        const data = result.data;
        console.log(data);
    }

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