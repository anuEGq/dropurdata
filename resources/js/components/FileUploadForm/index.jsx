import { React, useState } from "react";
import { useStyles } from "./style";
import { DropzoneArea } from "material-ui-dropzone";
import { TextField, Button } from "@mui/material";
import KeywordsInput from "../../plugins/KeywordsInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

export default function FileUploadForm(props) {
    const [keywords, setKeywords] = useState([]);
    const classes = useStyles();
    
    const { onSubmit, supportdFormats, supportedFileSize } = props;

    const handleSelectedTags = (items) => setKeywords(items);

    const initialValues = {
        file : [],
        fileTitle : '',
        keywords : [],
        fileDesc : '',
    }

    return (
        <>
            <Formik initialValues={initialValues}
                    onSubmit = {
                        (values,fomikHelpers)=>{
                            const keyword = JSON.stringify(keywords);
                            values.keywords = keyword;
                            const fileData = new FormData();
                            fileData.append('file', values.file);
                            fileData.append('title', values.fileTitle);
                            fileData.append('desc', values.fileDesc);
                            fileData.append('keyword',values.keywords)
                            onSubmit(fileData);
                            fomikHelpers.resetForm();
                        }
                    }
                    validationSchema = {
                        object({
                            fileTitle : string().required("Please enter title").min(2, 'Title too short'),
                            fileDesc : string().required("Please enter description").min(10, 'Description too short'),
                        })
                    }>
                {(formik) => (
                    <Form className={classes.form}>
                        <div className={classes.container}>
                            <div>
                                <Field as = {DropzoneArea}
                                    name ='file'
                                    type = 'file'
                                    onChange={(value) => {formik.setFieldValue('file',value[0])}}
                                    acceptedFiles={supportdFormats}
                                    maxFileSize={supportedFileSize}
                                    filesLimit={1}
                                    dropzoneClass={classes.dropZone} 
                                    showPreviews={true}
                                    showPreviewsInDropzone={false}
                                    previewGridProps={{
                                        container: {
                                            spacing: 1,
                                            direction: "row",
                                        },
                                    }}
                                    previewChipProps={{
                                        classes: { root: classes.previewChip },
                                    }}
                                    previewText="Selected file"
                                />
                            </div>
                            <br />
                            <div>
                                <Field name="fileTitle" type="text" as={TextField} 
                                    sx={{ marginTop: 1 }}
                                    size="small"
                                    variant = "outlined"
                                    fullWidth
                                    label="File Title"
                                    id="fullWidth"
                                    error={Boolean(formik.errors.fileTitle) && Boolean(formik.touched.fileTitle)}
                                    helperText = {Boolean(formik.touched.fileTitle) && formik.errors.fileTitle}
                                    />
                                <div className={classes.keywordInpt}>
                                    <Field as = {KeywordsInput}
                                        selectedTags={(handleSelectedTags)}
                                        fullWidth
                                        variant="outlined"
                                        id="keywords"
                                        name="keywords"
                                        placeholder="Add keywords"
                                    />
                                </div>
                                <Field name="fileDesc" type="text" as={TextField} 
                                    sx={{ marginTop: 1 }}
                                    size="small"
                                    fullWidth
                                    label="Description"
                                    id="outlined-textarea"
                                    error={Boolean(formik.errors.fileDesc) && Boolean(formik.touched.fileDesc)}
                                    helperText = {Boolean(formik.touched.fileDesc) && formik.errors.fileDesc}
                                    multiline
                                    />

                                <Button
                                    type="submit"
                                    color="primary"
                                    sx={{ marginTop: 1 }}
                                    variant="contained"
                                    disabled = {!formik.dirty || !formik.isValid}
                                >
                                    Upload
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    );
}
