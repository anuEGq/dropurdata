import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useLocation,useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from "axios";

const FilesTable = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const location = useLocation();
    const [files, setFiles] = useState([]);

    const [tablestate, setTableState] = useState(false);

    const cardData = location.state.data;

    const fileType = { fileType: cardData.type };
    const getFiles = () => {
        const { files } = axios
            .post(`http://127.0.0.1:8000/api/getFiles`, fileType)
            .then((res) => {
                setFiles(res.data.response);
            });
    };
    const deleteFile = (file_id) => {
        const { files } = axios
            .post(`http://127.0.0.1:8000/api/deleteFile`, { id: file_id })
            .then((res) => {
                if (res.data.status === 200) {
                    swal(
                        "File Deleted",
                        "Your file deleted sucessfully",
                        "success"
                    );
                    if(tablestate === true){
                        setTableState(false);
                    }
                    else{
                        setTableState(true);
                    }
                }
            });
    };
    const onClickAction = (value, type) => {
        var file_id = value.id;
        if (type == "delete") {
            deleteFile(file_id);
        } else if (type == "edit") {
            const keywordaArr = JSON.parse(value.keyword);
            navigate("../edit", {state:{item:value, keywordaArr}});
        } else {
            navigate("../view", {state:{row:value, card:cardData}})
        }
    };

    /* On render these page  getFiles api call is called,  this api call again called on each chenge of table state */
    useEffect(() => {
        getFiles();
    }, [tablestate]);

    const columns = [
        {
            name: "Title",
            sortable: true,
            selector: (row) => row.title,
        },
        {
            name: "Description",
            sortable: true,
            selector: (row) => row.Description,
        },
        {
            name: "FileName",
            sortable: true,
            selector: (row) => row.FileName,
        },
        {
            name: "Keywords",
            selector: (row) => row.keyword,
            sortable: true,
        },
        {
            name: "Uploaded Date",
            sortable: true,
            selector: (row) => row.updated_at,
        },
        {
            name: "Edit",
            sortable: false,
            cell: (value) => (
                <IconButton onClick={() => onClickAction(value, "edit")} aria-label="delete">
                    <ModeEditIcon />
                </IconButton>
            ),
        },
        {
            name: "Delete",
            sortable: false,
            cell: (value) => (
                <IconButton onClick={() => onClickAction(value, "delete")} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            ),
        },
        {
            name: "View",
            sortable: false,
            cell: (value) => (
                <IconButton onClick={() => onClickAction(value, "view")}>
                    <RemoveRedEyeIcon />
                </IconButton>
            ),
        },
    ];
    return (
        <div className={classes.Table}>
            <DataTableExtensions columns={columns} data={files}>
                <DataTable
                    columns={columns}
                    data={files}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination={true}
                    highlightOnHover
                />
            </DataTableExtensions>
        </div>
    );
};

export default FilesTable;
