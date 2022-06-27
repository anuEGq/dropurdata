import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    Table : {
        width: "85% !important",
        overflow: "auto",
        padding:10
    },
    Modal : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

  });
