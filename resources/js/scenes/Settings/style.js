import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    dashboard:{
        padding:10,
        width:'84%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    dashTitle:{
        fontSize: 28,
        marginLeft:20,
        marginTop:10,
    },
    settingsCard:{
        width: "100rem"
    }
});