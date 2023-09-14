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
    borderBottom: '1px solid #eaeaea'
  },

  //PAGE
  page: {},

  //POST
  post: {},

  //SECTION
  section: {
    backgroundColor: '#eaeaea',
    padding: '32px 10% 32px 10%',  
  },

  sectionTitle: {
    color: 'blue'
  }
});

export default useStyles;