import {createUseStyles} from 'react-jss'
export const useStyles = createUseStyles({
    container:{
        height: "fit-content",
        position:"relative",
        maxWidth: "74rem",
        marginLeft:"unset !important",
        background: "#fff",
        width: "100%",
        padding: 10,
        borderRadius: 1,
      },
      previewChip: {
        minWidth: 160,
        maxWidth: 210
      },
      dropZone:{
          minHeight:"auto !important"
      },
      keywordInpt:{
        marginTop:20
      },
      form:{
        width: "60%"
      }
});