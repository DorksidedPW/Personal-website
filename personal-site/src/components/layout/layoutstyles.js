import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  //MAIN
  main: {
    width: '100%',
    color: 'white'
  },

  //HEADER
  header: {
    width: '100%',
    height: 148,
    display: 'flex',
    padding: '32px 15% 32px 15%',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    '@media (max-width: 1024px)': {
      padding: 16,
    }
  },

  //PAGE
  page: {},

  //POST
  post: {},

  //SECTION
  section: {
    padding: '32px 15% 32px 15%',
    fontSize: 14,
    color:'#eeeeee',
    fontWeight: 400,
    fontFamily: "'Roboto', sans-serif ",
    '& img': {
      border: '4px solid red'
    },
    '@media (max-width: 1024px)': {
      padding: 16,
      fontSize: 16
    }
  },
  sectionTitle: {
    fontFamily: "'Montserrat', sans-serif",
    //background: ({theme}) => theme.palette.secondary
  },

  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  content: {
    '& blockquote': {
      fontStyle: "italic",
      margin: 0,
      fontSize: '1.5em',
      fontWeight: 200,
      paddingLeft: 16,
      borderLeft: '2px solid white'
    }
  }

});

export default useStyles;