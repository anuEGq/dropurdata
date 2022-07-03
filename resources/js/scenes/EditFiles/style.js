import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    fileUploadContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:10,
        width:'84%',
        overflow:'auto'
    },
    fileUploadTitle:{
        marginLeft:20,
        marginTop:10,
        fontSize:28
    },
    editform:{
        background: "#fff",
        padding: 10,
        display: "flex",
        flexDirection: "column",
    },
    container:{
        width: "88%",
    },
    keywordInpt:{
        marginTop:20
    },
    buttonGroup:{
        display: "flex",
        justifyContent: "flex-end",
    },
    btn : {
        marginLeft : "20px !important",
    }
});