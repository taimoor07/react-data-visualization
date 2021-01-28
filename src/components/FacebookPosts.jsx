import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NivoBarChart from './common/NivoBarChart';
import { formateData } from '../helpers/methods';
import { facebookPostsData } from '../assets/task1-data';
const Papa = require("papaparse");

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

    // The following work is for upload csv file, we will upload a csv file and then convert it json
    // and then show its result on chart

    // const [selectedFile, setSelectedFile] = React.useState(null);
    // const [jsonData, setJsonData] = React.useState(null);
    // const onFileChange = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // }

    // const updateChart = (e) => {
    //     if (selectedFile) {
    //         Papa.parse(selectedFile, {
    //             delimiter: ",",
    //             header: true,
    //             dynamicTyping: true,
    //             complete: function (results, file) {
    //                 setJsonData(results.data)
    //             }
    //         });
    //     }
    // }
    // useEffect(() => {
    //     if (jsonData && jsonData.length > 0) {
    //         setData(formateData(jsonData));
    //     }
    // }, [jsonData]);

    return (
        <div className={classes.fbPosts}>
            {/* <label className="file-upload">
            <input type="file" onChange={onFileChange} />
            <button onClick={updateChart}>Update</button>
            </label> */}

            <h1 className={classes.h1}>Facebook Post - based on industory</h1>
            {dataIndBased.length > 0 && <NivoBarChart
                data={dataIndBased}
                keys={keysIndBased}
                indexBy="PageName"
                xLegend="Industory"
                yLegend="No of Reactions"
                width={1500}
            />}

            <h1 className={classes.h1}>Facebook Post - based on posts</h1>
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