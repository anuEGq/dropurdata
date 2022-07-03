import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import { useLocation } from "react-router-dom";
import Editors from "../../components/Editors"

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from "axios";

export default function ViewFiles() {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [text, setText] = useState("");

    const location = useLocation();
    const cardData = location.state.card;
    const itemData = location.state.row;
    const convertXmlToHtml = (data) => {
        const { value } = axios
            .post(`http://127.0.0.1:8000/api/convertXmltoHtml`, data)
            .then((res) => {
                if (res.data.status === 200) {
                    setValue(res.data.output);
                } else {
                    setValue("<p>xml convertion failed</p>");
                }
            });
    };

    if (cardData.key == "xmlFiles") {
        var data = {
            id: itemData.id,
            filename: itemData.FileName,
        };
        useEffect(() => {
            convertXmlToHtml(data);
        }, []);
        return (
          <div className={classes.editor}>
            <Editors value= {value}/>
          </div>
        );
    } else if (cardData.key == "HtmlFiles" || cardData.key == "wordFiles") {
        var url = "http://localhost:8000/storage/files/" + itemData.FileName;
        return (
            <>
                <iframe className={classes.Iframe} src={url}></iframe>
            </>
        );
    } else if (cardData.key == "videoFiles") {
        var url = "http://localhost:8000/storage/files/" + itemData.FileName;
        return (
            <>
                <video controls>
                    <source src={url} />
                    Your browser does not support the video tag.
                </video>
            </>
        );
    } else if (cardData.key == "audioFiles") {
        var url = "http://localhost:8000/storage/files/" + itemData.FileName;
        return (
            <>
                <AudioPlayer
                    autoPlay
                    src={url}
                    onPlay={(e) => console.log("onPlay")}
                    // other props here
                />
            </>
        );
    } else if (cardData.key == "imageFiles") {
        var url = "http://localhost:8000/storage/files/" + itemData.FileName;
        return (
            <>
                <img src={url}></img>
            </>
        );
    }
}
