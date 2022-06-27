import {React,useState} from "react";
import { useStyles } from "./style";
import { DropzoneArea } from "material-ui-dropzone";
import { TextField, Button } from "@mui/material";
import KeywordsInput from "../../plugins/KeywordsInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmpty } from "lodash";

export default function FileUploadForm(props) {

    const [file, setFile] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [dropZoneValid, setdropZoneValid] = useState({});
    const classes = useStyles();

    /*Validation States*/
    const [titleValidation , setTitleValidation] = useState(false);

    const {onSubmit, supportdFormats,supportedFileSize} = props;
    const [filetypes, setFileTypes] = useState(supportdFormats);
    const [maxFileSize, setMaxFileSize] = useState(supportedFileSize);
    const handleSelecetedTags = (items) => (
        setKeywords(items)
    )
    const handleTitleInput = (e) => (
        setTitle(e.target.value),
        e.target.value.length > 0 && setTitleValidation(true)
    )
    const handleDescInput = (e) => (
        setDesc(e.target.value)
    )
    const handleChange = (value) => (
        setFile(value[0])
    )

    const onFinalSubmit = (value) => {
        const keyword =  JSON.stringify(value.keywords);
        const fileData = new FormData();
        fileData.append('file', value.file);
        fileData.append('title',value.title);
        fileData.append('desc',value.desc);
        fileData.append('keyword',keyword);
        /*Validation onSubmit*/
        if(isEmpty(value.file) && titleValidation === false){
            toast.warn("Please fill Required Fields");
        }
        else{
            onSubmit(fileData);
        }
    }
    return (
        <>
            <ToastContainer />
            <div className={classes.container}>
                    <div>
                        <DropzoneArea
                            onChange={(value)=>handleChange(value)}
                            acceptedFiles={filetypes}
                            maxFileSize	= {maxFileSize}
                            filesLimit={1}
                            dropzoneClass={classes.dropZone}
                            showPreviews={true}
                            showPreviewsInDropzone={false}
                            previewGridProps={{
                                container: { spacing: 1, direction: "row" },
                            }}
                            previewChipProps={{
                                classes: { root: classes.previewChip },
                            }}
                            previewText="Selected file"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField
                            error={titleValidation?false : true}
                            helperText={title === "" ? "Empty!" : " "}
                            onChange={(value)=>handleTitleInput(value)}
                            sx={{ marginTop: 1 }}
                            size="small"
                            fullWidth
                            label="File Title"
                            id="fullWidth"
                        />
                        <div className={classes.keywordInpt}>
                            <KeywordsInput
                                selectedTags={handleSelecetedTags}
                                fullWidth
                                variant="outlined"
                                id="keywords"
                                name="keywords"
                                placeholder="Add keywords"
                            />
                        </div>
                        <TextField
                            onChange={(value)=>handleDescInput(value)}
                            sx={{ marginTop: 1 }}
                            size="small"
                            fullWidth
                            id="outlined-textarea"
                            label="Description"
                            multiline
                        />

                        <Button
                            onClick={()=>onFinalSubmit({file,title,desc,keywords})}
                            color="success"
                            sx={{ marginTop: 1 }}
                            variant="contained"
                        >
                            Upload
                        </Button>
                    </div>
            </div>
        </>
    );
}
