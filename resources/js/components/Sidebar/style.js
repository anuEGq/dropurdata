import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    sidebar:{
        width:"16%",
        background: "#FFFFFF",
        boxShadow:  "0px 4px 12px rgba(0, 0, 0, 0.05)",
    },
    logoname:{
        padding:20,
        fontSize: 32,
        fontWeight: "bold"
    },
    sideBarList:{
        display:"contents"
    },
    navLi:{
        padding:20,
        fontSize:18,
        color: "#0000",
        listStyle: "none",
        
    },
    navLinks:{
        fontStyle:"none",
        textDecoration: "none",
    },
    navTitle:{
        fontWeight:"bold",
        color:"#000"
    },
    navIcon:{
        color:"#000",
        marginRight:10
    }

  });
