import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NivoBarChart from './common/NivoBarChart';
import { formateData } from '../helpers/methods';
import { facebookPostsData } from '../assets/task1-data';

const useStyles = makeStyles((theme) => ({
    fbPosts: {
        textAlign: "center"
    },
    h1: {
        marginTop: "40px"
    }
}));

const FacebookPosts = () => {
    const classes = useStyles();

    const [dataIndBased, setDataIndBased] = React.useState([]);
    const [dataPostBased, setDataPostBased] = React.useState([]);
    let keysIndBased = ['Shares', 'Likes', 'Comments', 'Haha', 'Love', 'Wow', 'Angry'];

    useEffect(() => {
        setDataIndBased(formateData(facebookPostsData));
        setDataPostBased(facebookPostsData.slice(0, 400));
    }, []);



    return (
        <div className={classes.fbPosts}>
            <h1 className={classes.h1}>Facebook Posts Data Analysis - Based on industory</h1>
            {dataIndBased.length > 0 && <NivoBarChart
                data={dataIndBased}
                keys={keysIndBased}
                indexBy="PageName"
                xLegend="Industory"
                yLegend="No of Reactions"
                width={1500}
            />}

            <h1 className={classes.h1}>Facebook Posts Data Analysis - Based on posts</h1>
            <div className={classes.ChartWrapper}>
                {dataPostBased.length > 0 && <NivoBarChart
                    data={dataPostBased}
                    keys={keysIndBased}
                    indexBy="Post"
                    xLegend="Post"
                    yLegend="No of Reactions"
                    width={5000}
                />}
            </div>
        </div>
    )
}

export default FacebookPosts;