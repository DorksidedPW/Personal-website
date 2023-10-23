import {createUseStyles} from 'react-jss'

const layoutStyles = createUseStyles((theme) => ({
  //MAIN
  main: {
    boxSizing: 'border-box',
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    paddingLeft: '15%',
    paddingRight: '15%',
    backgroundColor: theme.palette.dark,
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: theme.palette.darkBG,
    },
    '@media (max-width: 1024px)': {
      padding: 16,
    }
  },
  contentContainer: {},

  postsContainer:{  
    display: 'flex',
    flexDirection: 'column',
    gap: '64px'
  },

  //HEADER
  header: {
    width: '100%',
    height: 40,
    display: 'flex',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.dark,
    '@media (max-width: 1024px)': {
      padding: theme.paddings.layout.fullScreenPadding,
    }
  },

  //PAGE
  page: {},

  //POST
  post: {},

  //MENU
  mainMenuContainer: {
    height: '100%',
    position: 'sticky',
    width:'25%',
    top: 0
  },

  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'sticky',
    top: 0,
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },

  menuItem: {
    listStyle:'none',
    color: 'white',
    fontFamily: "'Roboto', sans-serif ",
    marginBottom: 32,
    display: 'flex',
    flexDirection:'column',
    '& a': {
      color:'white',
      textDecoration: 'none',
      '& h4': {
        margin: 0,
        fontSize: 14,
        textTransform: 'uppercase',
      },
      '& span': {
        width: 200,
        height: 48,
        overflow: 'hidden',
        display:'block',
        whiteSpace:'nowrap',
        textOverflow: 'ellipsis'
      },
      '&:hover': {
        color: '#ff7c07',
        transition:'0.1s ease-in'
      }
    }
  },

  itemLabel: {
    fontFamily: "'Roboto', sans-serif ",
    textTransform: 'uppercase'
  },

  //SECTION
  sectionGrid: {

  },

  section: {
    fontSize: 12,
    gridArea: 'content',
    fontWeight: 400,
    position: 'relative',
    color: 'white',
    zIndex: 10,
    padding: '8px 64px 8px 64px',
    fontFamily: "'Roboto', sans-serif ",
    '@media (max-width: 1024px)': {
      padding: 16,
      fontSize: 16
    },
  },

  sectionImage: {
    gridArea: 'image',
    display: 'none',
    position: 'relative',
    zIndex: 100,
    width: '100%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    maxWidth: '100%'
  },

  sectionTitle: {
    fontSize:  32,
    textTransform: 'uppercase',
    margin: 0,
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
      fontSize: '1.2em',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 200,
      paddingLeft: 16,
      borderLeft: '2px solid white'
    }
  }
}));

export default layoutStyles;