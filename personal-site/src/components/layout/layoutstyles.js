import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  //MAIN
  main: {
    width: '100%',
    backgroundColor: 'white'
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
    borderBottom: '1px solid #eaeaea',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
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
    color: '#c6c6c6'
  },

  content: {
    '& blockquote': {
      fontStyle: "italic",
      color: '#4e4e4e'
    }
  }

});

export default useStyles;