import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    myButton: {
      color: 'blue',
      margin: {
        // jss-plugin-expand gives more readable syntax
        top: 5, // jss-plugin-default-unit makes this 5px
        right: 0,
        bottom: 0,
        left: '1rem'
      },
      '& span': {
        // jss-plugin-nested applies this to a child span
        fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
      }
    },
    myLabel: {
      fontStyle: 'italic'
    },
    dashboard:{
        padding:10,
        width:'84%'
    },
    dashTitle:{
        fontSize: 28,
        marginLeft:20,
        marginTop:10,
    },
    dashCards:{
        marginLeft: 70,
        display:'flex',
        flexDirection:'row',
        alignContent:'flex-start',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        width:'88%'
    }
  });
