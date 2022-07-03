import React from "react";
import {  Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import  Footer from "../../components/Footer";
import { useStyles } from "./style";
import Sidebar from "../../components/Sidebar";
import FileUpload from "../FileUpload";
import Settings from "../Settings";
import FilesTable from "../FilesTable";
import ViewFiles from "../ViewFiles";
import EditFiles from "../EditFiles";


export default function App(){
  const classes = useStyles();
    return (
      <div className={classes.container}>
        <div className={classes.contetSection}>
        <Sidebar/>
        <Routes>
          <Route  exact path="/" element={<Dashboard/>} /> 
          <Route  path="/dashboard" element={<Dashboard/>} /> 
          <Route  path="/upload" element={<FileUpload/>} />
          <Route  path="/settings" element={<Settings/>} />
          <Route  path="/files" element={<FilesTable />} />   
          <Route  path="/edit" element={<EditFiles />} />  
          <Route  path="/view" element={<ViewFiles />} />    
        </Routes>
        </div>
      <Footer/>
    </div>
    )
}