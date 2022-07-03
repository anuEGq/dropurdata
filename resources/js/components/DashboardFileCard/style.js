import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    card:{
        cursor:'pointer',
        display:'flex',
        padding:20,
        margin:20,
        width: 400,
        height: 144,
        background: "#fff",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        '&:hover':{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)"
        },
        borderRadius: 10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardTitle:{
        fontSize: 28
    },
    cardCount:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    cardIcon:{
        fontSize:68,
        color: "#645E9D"
    }
  });
