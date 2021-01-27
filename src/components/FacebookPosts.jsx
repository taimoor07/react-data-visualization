import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NivoBarChart from './common/NivoBarChart';
import { formateData } from '../helpers/methods';
const Papa = require("papaparse");
const csvFilePath = '../assets/task1-data.csv'

const useStyles = makeStyles((theme) => ({
    fbPosts: {
        textAlign: "center"
    }
}));

const FacebookPosts = () => {
    const classes = useStyles();


    useEffect(() => {
        var blob = null;
        var xhr = new XMLHttpRequest();
        var file = xhr.open("GET", csvFilePath);
        console.log("🚀 ~ file: FacebookPosts.jsx ~ line 22 ~ useEffect ~ file", file)
        //  xhr.var myReader = new FileReader();
        //  myReader.readAsArrayBuffer(blob) 
        //  myReader.addEventListener("loadend", function (e)
        //   var myReader = new FileReader();

        // Papa.parse(csvFilePath, {
        //     delimiter: ",",	// auto-detect
        //     header: true,
        //     dynamicTyping: true,
        //     complete: function (results, file) {
        //         console.log("Parsing complete:", results, file);
        //         setJsonData(results.data)
        //     }
        // });
    }, []);

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [jsonData, setJsonData] = React.useState(null);
    const [data, setData] = React.useState([]);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const updateChart = (e) => {
        if (selectedFile) {
            Papa.parse(selectedFile, {
                delimiter: ",",	// auto-detect
                header: true,
                dynamicTyping: true,
                complete: function (results, file) {
                    console.log("Parsing complete ----------------->", results, file);
                    setJsonData(results.data)
                }
            });
        }
    }

    useEffect(() => {
        if (jsonData && jsonData.length > 0) {
            setData(formateData(jsonData));
        }
    }, [jsonData]);

    // console.log("🚀 ~ file: FacebookPosts.jsx ~ line 54 ~ FacebookPosts ~ data", data)
    return (
        <div className={classes.fbPosts}>
            <h1>Facebook Post showed by industory</h1>
            <label className="file-upload">
                <input type="file" onChange={onFileChange} />
                <button onClick={updateChart}>Update</button>
            </label>
            {data.length > 0 && <NivoBarChart data={data} />}
        </div>
    )
}

export default FacebookPosts;