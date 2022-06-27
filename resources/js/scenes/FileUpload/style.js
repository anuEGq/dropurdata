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
});