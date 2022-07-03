import React from "react";
import { useNavigate } from "react-router-dom";
import FileUploadForm from "../../components/FileUploadForm";
import {useStyles} from "./style";
import swal from 'sweetalert';

export default function FileUpload(props){
    const classes = useStyles();
    const navigate = useNavigate();
    const {
        onInit,
        onSubmit,
        isFailed,
        selectedFormats,
        selectedFileSize,
        selectIsSettingsLoading} = props;
    const goToDashBoard = () =>{
        if(isFailed){
            swal("File Uploaded Failed!", "File Uploaded Failed!", "error");
            navigate("/dashboard");
        }else{
            swal("File Uploaded!", "File Uploaded Successfully!", "success");
            navigate("/dashboard");
        }
    }
    /*OnInit - trigger global redux action to get Settings values*/
    React.useEffect(() => {
        onInit();
    }, []);

    return(
        <>
        <div className={classes.fileUploadContainer}>
            <h6 className={classes.fileUploadTitle}>Upload File</h6>
            <FileUploadForm 
                    supportdFormats={selectedFormats}
                    supportedFileSize={selectedFileSize}
                    onSubmit={(value)=>onSubmit({value,goToDashBoard})}/>
        </div>
        </>
    )
}