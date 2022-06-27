import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import KeywordsInput from "../../plugins/KeywordsInput";
import { useNavigate, useLocation } from "react-router-dom";
import { useStyles } from "./style";
import swal from "sweetalert";
import axios from 'axios';

export default function EditFiles(props) {
    const classes = useStyles();

    const navigate = useNavigate();
    const location = useLocation();
    const value = location.state;
    const [id, setId] = useState(value.item.id);
    const [title, setTitle] = useState(value.item.title);
    const [desc, setDesc] = useState(value.item.Description);
    const [keywords,setKeywords] = useState(value.keywordaArr);
    
    const goToDashBoard = () => {
        swal("File Updated!", "File Updated Successfully!", "success");
        navigate("/dashboard");
    };
    const handleTitleInput = (e) => setTitle(e.target.value);
    const handleDescInput = (e) => setDesc(e.target.value);

    const submitForm = (item) => {
        const { files } = axios
            .post(`http://127.0.0.1:8000/api/editFile`,item)
            .then((res) => {
                if (res.data.status === 200) {
                    goToDashBoard();
                }
                else{
                    swal("File Updation failed!", "File Updated failed!", "error");
                }
            });
    };


    /* handleSelectedTags function call on change in  KeywordsInput it will set the keyword state each time*/
    const handleSelecetedTags = (items) => (
        setKeywords(items)
    )
    

    return (
        <div className={classes.fileUploadContainer}>
            <h6 className={classes.fileUploadTitle}>Edit File</h6>
            <div className={classes.container}>
                <div className={classes.editform}>
                    <TextField
                        onChange={(value) => handleTitleInput(value)}
                        value={title}
                        sx={{ marginTop: 1 }}
                        size="small"
                        fullWidth
                        label="File Title"
                        id="fullWidth"
                    />
                    <br />
                    <div className={classes.keywordInpt}>
                        <KeywordsInput
                            tags= {value.keywordaArr}
                            selectedTags={handleSelecetedTags}
                            fullWidth
                            variant="outlined"
                            id="keywords"
                            name="keywords"
                            placeholder="Add keywords"
                        />
                    </div>
                    <br />
                    <TextField
                        onChange={(value) => handleDescInput(value)}
                        value={desc}
                        sx={{ marginTop: 1 }}
                        size="small"
                        fullWidth
                        id="outlined-textarea"
                        label="Description"
                        multiline
                    />

                    <Button
                        onClick={() => submitForm({ id,title, desc, keywords })}
                        color="success"
                        sx={{ marginTop: 1 }}
                        variant="contained"
                    >
                        Updatevalue.item.id
                    </Button>
                    <Button
                        color="success"
                        sx={{ marginTop: 1 }}
                        variant="contained"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}
