import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  //MAIN
  main: {
    width: '100%',
    color: 'white'
  },

  postsContainer:{
    display: 'flex',
    flexDirection: 'column',
    gap: '64px'
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
    //background: ({theme}) => theme.palette.secondary
  },

  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  content: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
    '& blockquote': {
      fontStyle: "italic",
      margin: 0,
      fontSize: '1.5em',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 200,
      paddingLeft: 16,
      borderLeft: '2px solid white'
    }
  }

});

export default useStyles;