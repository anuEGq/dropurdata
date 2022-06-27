import {React, useState, useRef, useEffect} from "react";
import { useStyles } from "./style";
import "./formStyle.css";

export default function SettingsForm(props) {
    const {onSubmit, supportdFormats,supportedFileSize} = props;
    const [filetypes, setFileTypes] = useState(supportdFormats);
    const [maxFileSize, setMaxFileSize] = useState(supportedFileSize);
  
  
    const onSubmitHandler=()=>{
        const data = {
            "fileTypes": filetypes,
            "maxSize": maxFileSize
        }
        onSubmit(data);
        
    }

    const checkboxHandler=(event)=>{
        if(event.target.checked){
            setFileTypes((prevValue)=>[...prevValue, event.target.value])
        }
        else{
            setFileTypes((prevValue)=>prevValue.filter(val=>val!=event.target.value))
        }
    }
    
    const onMaxValueChange = (event)=>{
        setMaxFileSize(event.target.value)
    }

    return (
        <>
            <div className="container">
                    <p>Config file type you want to upload</p>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler} name="xml" value="text/xml" checked={filetypes?.includes("text/xml")}  type="checkbox" />
                            <i className="helper"></i>XML File
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler}  name = "html" value = "text/html"  checked={filetypes?.includes("text/html")}  type="checkbox" />
                            <i className="helper"></i>HTML File
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler} name = "word" value = "application/msword"  checked={filetypes?.includes("application/msword")} type="checkbox" />
                            <i className="helper"></i>Word File
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler} name = "video" value="video/*"  checked={filetypes?.includes("video/*")}  type="checkbox" />
                            <i className="helper"></i>Videos
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler} name = "image" value="image/*" checked={filetypes?.includes("image/*")} type="checkbox" />
                            <i className="helper"></i>Images
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input onChange={checkboxHandler} name = "audio" value="audio/*" checked={filetypes?.includes("audio/*")}   type="checkbox" />
                            <i className="helper"></i>Audio Files
                        </label>
                    </div>
                    <div>
                        <span>Maximum document upload size (in MB)</span> &nbsp;
                        <input name="maxSize" type="number" onChange={onMaxValueChange} required="required" value={maxFileSize} />
                    </div>
                    <br />
                    <div className="button-container">
                        <button onClick={onSubmitHandler} className="button">
                            <span>Submit</span>
                        </button>
                    </div>
            </div>
        </>
    );
}
