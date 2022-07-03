import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeywordsInput from "../../plugins/KeywordsInput";
import { useNavigate, useLocation } from "react-router-dom";
import { useStyles } from "./style";
import swal from "sweetalert";
import axios from "axios";

import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

export default function EditFiles(props) {
    const classes = useStyles();

    const navigate = useNavigate();
    const location = useLocation();
    const value = location.state;
    const [id, setId] = useState(value.item.id);
    const [title, setTitle] = useState(value.item.title);
    const [desc, setDesc] = useState(value.item.Description);
    const [keywords, setKeywords] = useState(value.keywordaArr);

    const goToDashBoard = () => {
        swal("File Updated!", "File Updated Successfully!", "success");
        navigate("/dashboard");
    };
    /* handleSelectedTags function call on change in  KeywordsInput it will set the keyword state each time*/
    const handleSelecetedTags = (items) => setKeywords(items);

    const initialValues = {
        fileTitle: title,
        keywords: keywords,
        fileDesc: desc,
    };

    const submitForm = (item) => {
        const { files } = axios
            .post(`http://127.0.0.1:8000/api/editFile`, item)
            .then((res) => {
                if (res.data.status === 200) {
                    goToDashBoard();
                } else {
                    swal(
                        "File Updation failed!",
                        "File Updated failed!",
                        "error"
                    );
                }
            });
    };



    return (
        <div className={classes.fileUploadContainer}>
            <h6 className={classes.fileUploadTitle}>Edit File</h6>
            <div className={classes.container}>
                <div className={classes.editform}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, fomikHelpers) => {
                            values.keywords = keywords;
                            submitForm({'id':id, 'title': values.fileTitle, 'desc':values.fileDesc, 'keywords':values.keywords });
                        }}
                        validationSchema={object({
                            fileTitle: string()
                                .required("Please enter title")
                                .min(2, "Title too short"),
                            fileDesc: string()
                                .required("Please enter description")
                                .min(10, "Description too short"),
                        })}
                    >
                        {(formik) => (
                            <Form>
                                <Field as = {TextField}
                                    onChange={(e) => {formik.setFieldValue('fileTitle',e.target.value)}}
                                    sx={{ marginTop: 1 }}
                                    size="small"
                                    fullWidth
                                    type = "Text"
                                    name = "fileTitle"
                                    label="File Title"
                                    id="fullWidth"
                                    error={Boolean(formik.errors.fileTitle) && Boolean(formik.touched.fileTitle)}
                                    helperText = {Boolean(formik.touched.fileTitle) && formik.errors.fileTitle}
                                />
                                <br />
                                <div className={classes.keywordInpt}>
                                    <Field as = {KeywordsInput}
                                        tags={value.keywordaArr}
                                        selectedTags={handleSelecetedTags}
                                        fullWidth
                                        variant="outlined"
                                        id="keywords"
                                        name="keywords"
                                        placeholder="Add keywords"
                                    />
                                </div>
                                <br />
                                <Field as = {TextField}
                                    onChange={(e) => {formik.setFieldValue('fileDesc',e.target.value)}}
                                    sx={{ marginTop: 1 }}
                                    size="small"
                                    fullWidth
                                    type = "text" 
                                    name = "fileDesc"
                                    id="outlined-textarea"
                                    label="Description"
                                    multiline
                                    error={Boolean(formik.errors.fileDesc) && Boolean(formik.touched.fileDesc)}
                                    helperText = {Boolean(formik.touched.fileDesc) && formik.errors.fileDesc}
                                />
                                <div className={classes.buttonGroup}>
                                <Button
                                    type = "submit"
                                    color="primary"
                                    sx={{ marginTop: 1 }}
                                    variant="contained"
                                    disabled = {!formik.dirty || !formik.isValid}
                                >
                                    Update
                                </Button>
                                <Button
                                    className={classes.btn}
                                    color="primary"
                                    sx={{ marginTop: 1 }}
                                    variant="contained"
                                >
                                    Cancel
                                </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
