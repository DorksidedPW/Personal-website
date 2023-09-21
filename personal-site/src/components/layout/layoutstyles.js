import {createUseStyles} from 'react-jss'

const layoutStyles = createUseStyles((theme) => ({
  //MAIN
  main: {
    display: 'flex',
    flexDirection: 'row',
    padding: '32px 15% 32px 15%',
    boxSizing: 'border-box',
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    backgroundColor: theme.palette.primaryBG,
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: theme.palette.darkBG,
    },
    '@media (max-width: 1024px)': {
      padding: 16,
    }
  },

  mainMenuContainer: {
    width: '30%',
    minWidth: '30%',
    height: '100%',
    position: 'sticky',
    top: 0
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

  //MENU
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },

  menuItem: {
    heigth: 48,
    maxHeight: 48
  },

  //SECTION
  section: {
    fontSize: 14,
    color: theme.palette.primaryTextColor,
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
}));

export default layoutStyles;